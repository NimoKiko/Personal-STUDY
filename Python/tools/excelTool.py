import os
import pandas as pd
import sys
import tkinter as tk
from tkinter import filedialog, messagebox
import chardet  # 用于检测文件编码


# 主函数
def main():
  print(f"----------------------------选择功能------------------------------------")
  print(f"[1] 多层级文件夹下的excel文件合并")
  print(f"[2] 文件删除")
  print(f"[0] 退出程序")
  input_num = int(input("请选择(回车以确定): "))
  deal_func_level_1(input_num)
  
# 一层处置函数
def deal_func_level_1(num):
  if num == 1:
    print(f"-----------------------------选择合并模式---------------------------------")
    print(f"[1] 合并全部文件")
    print(f"[2] 合并包含指定关键字的文件")
    print(f"[0] 返回上一级")
    input_num = int(input("请选择(回车以确定): "))
    deal_func_level_2(input_num)
  
  if num == 2:
    print(f"功能仍在开发中...")
    main()
  if num == 0:
    return 
    
    

# 二层处置函数
def deal_func_level_2(num):
  # 功能1：合并全部文件
  if num == 1:
    print(f"功能仍在开发中...")
    main()
  # 功能2：合并包含指定关键字的文件
  if num == 2:
    input_keyword = input("输入文件名中包含的指定关键字(多关键字以英文逗号 ',' 分隔): ")
    # 获取关键字列表
    target_keywords_list = input_keyword.split(',')
    # 选择文件目录
    try:
      select_folder_path = select_folder()
      if not select_folder_path:
        print("未选择文件夹，程序退出...")
        return 
      
      # 自动生成输出文件名
      output_file = os.path.join(select_folder_path, "报警文件合并结果.xlsx")
      
      # 运行合并函数
      result_file = merge_excel_files(select_folder_path, output_file, target_keywords_list)
      
      # 显示完成消息
      if result_file:
        messagebox.showinfo("完成", f"文件合并完成!\n保存位置: {result_file}")
      
    except Exception as e:
      print(f"{str(e)}")
    # 

  if num == 0:
    main()

# 打开文件资源管理器
def select_folder():
    """打开文件夹选择对话框"""
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口
    folder_path = filedialog.askdirectory(title="选择包含报警文件的文件夹")
    return folder_path

# 合并文件函数
def merge_excel_files(root_dir, output_file, target_keywords_list):
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
            if any(keyword in lower_name for keyword in target_keywords_list):
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

# 入口函数
if __name__ == "__main__":
  # 执行main函数
  main()