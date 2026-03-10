import os
import pandas as pd
import tkinter as tk
from tkinter import filedialog, messagebox
import chardet  # 用于检测文件编码

# 主函数


def main():
    # 初始化
    init()

# 初始化函数


def init():
    print(f"----------------------------选择功能------------------------------------")
    print(f"[1] 多层级文件夹下的csv文件合并")
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
    elif num == 2:
        print(f"功能仍在开发中...")
        init()
    elif num == 0:
        return

# 二层处置函数


def deal_func_level_2(num):
    # 功能1：合并全部文件
    if num == 1:
        print(f"功能仍在开发中...")
        init()
    # 功能2：合并包含指定关键字的文件
    elif num == 2:
        input_keyword = input("输入文件名中包含的指定关键字(多关键字以英文逗号 ',' 分隔): ")
        # 获取关键字列表
        target_keywords_list = input_keyword.split(',')
        print(f"将合并文件名中包含【{input_keyword}】字样的文件...")
        # 获取需要排除的文件内sheet名称
        exclude_sheet_keyword = input("输入需要排除的sheet名称关键字: ")
        print(f"将排除sheet名称中包含【{exclude_sheet_keyword}】字样的page...")
        # 选择文件目录
        try:
            select_folder_path = select_folder()
            if not select_folder_path:
                print("未选择文件夹，程序退出...")
                return

            # 自动生成输出文件名
            output_file = os.path.join(select_folder_path, "文件合并结果.xlsx")

            # 运行合并函数
            result_file = merge_excel_files(
                select_folder_path, output_file, target_keywords_list, exclude_sheet_keyword)

            # 显示完成消息
            if result_file:
                messagebox.showinfo("完成", f"文件合并完成!\n保存位置: {result_file}")

        except Exception as e:
            print(f"{str(e)}")
    elif num == 0:
        init()

# 打开文件资源管理器


def select_folder():
    """打开文件夹选择对话框"""
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口
    folder_path = filedialog.askdirectory(title="选择包含报警文件的文件夹")
    return folder_path

# 合并文件函数


def merge_excel_files(root_dir, output_file, target_keywords_list, exclude_sheet_keyword):
    """
    遍历文件夹结构,合并包含指定关键字的Excel和CSV文件
    """
    # 支持的扩展名列表
    valid_extensions = ['.csv']
    all_data = []  # 存储所有数据框的列表
    csv_files = []  # 存储CSV文件路径
    excel_files = []  # 存储Excel文件路径

    print(f"开始遍历目录: {root_dir}")

    # 第一次遍历：收集文件路径
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            # 检查文件扩展名
            ext = os.path.splitext(filename)[1].lower()
            if ext not in valid_extensions:
                continue

            # 检查文件名是否包含关键词
            lower_name = filename.lower()
            if any(keyword.strip().lower() in lower_name for keyword in target_keywords_list):
                filepath = os.path.join(foldername, filename)

                if ext == '.csv':
                    csv_files.append(filepath)
                else:
                    excel_files.append(filepath)

    # 处理CSV文件
    if csv_files:
        print(f"找到 {len(csv_files)} 个CSV文件")
        csv_data_frames = []

        for csv_file in csv_files:
            try:
                # 尝试多种编码方式读取CSV文件
                df = None
                encodings_to_try = ['utf-8', 'gbk',
                                    'gb2312', 'latin1', 'iso-8859-1']

                for encoding in encodings_to_try:
                    try:
                        df = pd.read_csv(
                            csv_file, encoding=encoding, on_bad_lines='skip')
                        print(
                            f"成功读取CSV: {csv_file} (编码: {encoding}, {len(df)}行)")
                        break
                    except UnicodeDecodeError:
                        continue
                    except Exception as e:
                        print(f"读取CSV文件 {csv_file} 失败: {e}")
                        break

                # 如果常见编码都失败，尝试自动检测编码
                if df is None:
                    try:
                        with open(csv_file, 'rb') as f:
                            result = chardet.detect(f.read())
                        encoding = result['encoding']
                        df = pd.read_csv(
                            csv_file, encoding=encoding, on_bad_lines='skip')
                        print(
                            f"成功读取CSV: {csv_file} (自动检测编码: {encoding}, {len(df)}行)")
                    except Exception as e:
                        print(f"自动检测编码读取CSV文件 {csv_file} 失败: {e}")
                        continue

                if df is not None and not df.empty:
                    # 添加来源文件信息
                    df['来源文件'] = os.path.basename(csv_file)
                    df['文件路径'] = csv_file
                    df['文件类型'] = 'CSV'
                    csv_data_frames.append(df)

            except Exception as e:
                print(f"处理CSV文件失败 {csv_file}: {str(e)}")
                continue

        # 合并所有CSV数据
        if csv_data_frames:
            # 找出所有CSV文件的列名并集
            all_csv_columns = set()
            for df in csv_data_frames:
                all_csv_columns.update(df.columns)

            # 统一列结构，缺失的列填充NaN
            processed_csv_dfs = []
            for df in csv_data_frames:
                # 添加缺失的列
                for col in all_csv_columns:
                    if col not in df.columns:
                        df[col] = None
                # 按统一列顺序重新排列
                processed_csv_dfs.append(df[list(all_csv_columns)])

            # 合并所有CSV数据
            if processed_csv_dfs:
                combined_csv = pd.concat(processed_csv_dfs, ignore_index=True)
                all_data.append(combined_csv)
                print(f"CSV文件合并完成，总行数: {len(combined_csv)}")

    # 处理Excel文件
    if excel_files:
        print(f"找到 {len(excel_files)} 个Excel文件")

        for excel_file in excel_files:
            try:
                # 读取Excel文件
                xls = pd.ExcelFile(excel_file)

                # 遍历所有sheet
                for sheet_name in xls.sheet_names:
                    # 检查是否需要排除该sheet
                    if exclude_sheet_keyword and exclude_sheet_keyword.lower() in sheet_name.lower():
                        print(
                            f"跳过 {os.path.basename(excel_file)} 中的工作表: {sheet_name} (包含排除关键字)")
                        continue

                    try:
                        # 读取当前sheet
                        df = pd.read_excel(excel_file, sheet_name=sheet_name)

                        if not df.empty:
                            # 添加来源文件信息
                            df['来源文件'] = os.path.basename(excel_file)
                            df['文件路径'] = excel_file
                            df['工作表名'] = sheet_name
                            df['文件类型'] = 'Excel'
                            all_data.append(df)
                            print(
                                f"已加载Excel: {excel_file} (工作表: {sheet_name}, {len(df)}行)")
                    except Exception as e:
                        print(
                            f"读取Excel工作表失败 {excel_file} - {sheet_name}: {str(e)}")
                        continue

            except Exception as e:
                print(f"处理Excel文件失败 {excel_file}: {str(e)}")
                continue

    if not all_data:
        print("未找到符合条件的文件")
        return None

    # 合并所有数据
    print("正在合并所有数据...")

    if len(all_data) == 1:
        # 如果只有一个数据框，直接使用
        combined_df = all_data[0]
    else:
        # 如果有多个数据框，需要统一列结构
        # 找出所有数据框的列名并集
        all_columns = set()
        for df in all_data:
            all_columns.update(df.columns)

        # 统一列结构，缺失的列填充NaN
        processed_dfs = []
        for df in all_data:
            # 添加缺失的列
            for col in all_columns:
                if col not in df.columns:
                    df[col] = None
            # 按统一列顺序重新排列
            processed_dfs.append(df[list(all_columns)])

        # 合并所有数据
        combined_df = pd.concat(processed_dfs, ignore_index=True)

    print(f"总合并行数: {len(combined_df)}")
    print(f"总合并列数: {len(combined_df.columns)}")

    # 保存到Excel
    print(f"正在保存合并文件到: {output_file}")

    try:
        combined_df.to_excel(output_file, index=False)
        print(f"合并完成! 文件已保存到: {output_file}")
        return output_file
    except Exception as e:
        print(f"保存文件失败: {str(e)}")
        return None


# 入口函数
if __name__ == "__main__":
    # 执行main函数
    main()
