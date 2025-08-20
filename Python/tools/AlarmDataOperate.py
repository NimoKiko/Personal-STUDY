# 处理嵌套文件夹下的excel和csv文件工具

import os
import pandas as pd
import sys
import tkinter as tk
from tkinter import filedialog, messagebox
import chardet  # 用于检测文件编码

def merge_excel_files(root_dir, output_file):
    """
    遍历文件夹结构，合并包含"报警"、"bj"或"baoj"的Excel和CSV文件
    对于Excel文件，排除sheet名称中包含"sheet"字样的工作表
    
    参数:
    root_dir: 要搜索的根目录
    output_file: 合并后的输出文件路径
    """
    # 支持的扩展名列表
    valid_extensions = ['.xlsx', '.xlsm', '.xls', '.csv']
    all_data = []  # 存储所有数据框的列表
    
    print(f"开始遍历目录: {root_dir}")
    
    # 使用os.walk递归遍历目录
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            # 检查文件扩展名
            ext = os.path.splitext(filename)[1].lower()
            if ext not in valid_extensions:
                continue
                
            # 检查文件名是否包含关键词
            lower_name = filename.lower()
            if any(keyword in lower_name for keyword in ['报警', 'B', 'b']):
                filepath = os.path.join(foldername, filename)
                try:
                    if ext == '.csv':
                        # 处理CSV文件 - 解决编码问题
                        # 方法1：尝试常见中文编码
                        try:
                            df = pd.read_csv(filepath, encoding='utf-8')
                        except:
                            try:
                                df = pd.read_csv(filepath, encoding='gbk')
                            except:
                                try:
                                    df = pd.read_csv(filepath, encoding='gb2312')
                                except:
                                    # 方法2：自动检测编码
                                    with open(filepath, 'rb') as f:
                                        result = chardet.detect(f.read())
                                    encoding = result['encoding']
                                    df = pd.read_csv(filepath, encoding=encoding)
                        
                        df['来源文件'] = filepath
                        df['工作表名'] = 'CSV'  # 标记为CSV文件
                        all_data.append(df)
                        print(f"已加载CSV: {filepath} ({len(df)}行, 编码: {encoding if 'encoding' in locals() else 'utf-8/gbk'})")
                    else:
                        # 处理Excel文件
                        xls = pd.ExcelFile(filepath)
                        
                        # 遍历所有sheet，排除名称包含"sheet"的
                        for sheet_name in xls.sheet_names:
                            if 'sheet' in sheet_name.lower():
                                print(f"跳过 {filename} 中的工作表: {sheet_name} (包含'sheet'字样)")
                                continue
                                
                            # 读取当前sheet
                            df = pd.read_excel(filepath, sheet_name=sheet_name)
                            
                            # 添加来源文件和工作表名列
                            df['来源文件'] = filepath
                            df['工作表名'] = sheet_name
                            all_data.append(df)
                            print(f"已加载Excel: {filepath} (工作表: {sheet_name}, {len(df)}行)")
                    
                except Exception as e:
                    print(f"处理文件失败 {filepath}: {str(e)}")
    
    if not all_data:
        print("未找到符合条件的文件")
        return
    
    # 合并所有数据
    print("正在合并数据...")
    combined_df = pd.concat(all_data, ignore_index=True)
    
    # 保存到Excel
    print(f"正在保存合并文件到: {output_file}")
    combined_df.to_excel(output_file, index=False)
    print(f"合并完成! 总行数: {len(combined_df)}")

def select_folder():
    """打开文件夹选择对话框"""
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口
    folder_path = filedialog.askdirectory(title="选择包含报警文件的文件夹")
    return folder_path

def main():
    # 尝试使用tkinter选择文件夹
    try:
        root_dir = select_folder()
        if not root_dir:  # 用户取消了选择
            print("未选择文件夹，程序退出")
            return
            
        # 自动生成输出文件名
        output_file = os.path.join(root_dir, "报警文件合并结果.xlsx")
        
        # 运行合并函数
        result_file = merge_excel_files(root_dir, output_file)
        
        # 显示完成消息
        if result_file:
            messagebox.showinfo("完成", f"文件合并完成!\n保存位置: {result_file}")
    
    except ImportError:
        # tkinter不可用，使用命令行参数
        print("警告: 图形界面不可用，将使用命令行参数")
        parser = argparse.ArgumentParser(description='合并报警文件工具')
        parser.add_argument('-i', '--input', type=str, required=True, 
                            help='要遍历的根目录路径')
        parser.add_argument('-o', '--output', type=str, default='合并结果.xlsx', 
                            help='输出文件名 (默认: 合并结果.xlsx)')
        args = parser.parse_args()
        
        # 检查路径是否存在
        if not os.path.exists(args.input):
            print(f"错误: 路径 '{args.input}' 不存在!")
            sys.exit(1)
        
        # 运行合并函数
        merge_excel_files(args.input, args.output)

if __name__ == "__main__":
    # 添加命令行参数支持
    import argparse
    
    # 检查是否已有命令行参数
    if len(sys.argv) > 1:
        parser = argparse.ArgumentParser(description='合并报警文件工具')
        parser.add_argument('-i', '--input', type=str, help='要遍历的根目录路径')
        parser.add_argument('-o', '--output', type=str, default='合并结果.xlsx', 
                            help='输出文件名 (默认: 合并结果.xlsx)')
        args = parser.parse_args()
        
        if args.input:
            # 运行合并函数
            merge_excel_files(args.input, args.output)
            sys.exit(0)
    
    # 没有命令行参数时尝试图形界面
    main()