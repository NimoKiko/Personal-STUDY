import os

def find_excel_files(root_dir, output_file="C:/Users/97352/Desktop/数据分析/数据分析/excel_files.txt"):
    excel_extensions = ('.xlsx', '.xlsm', '.csv', '.xls')
    
    with open(output_file, 'w', encoding='utf-8') as f_out:
        for foldername, subfolders, filenames in os.walk(root_dir):
            for filename in filenames:
                if filename.lower().endswith(excel_extensions):
                    full_path = os.path.join(foldername, filename)
                    f_out.write(full_path + '\n')
                    print(f"找到文件: {full_path}")

    print(f"\n完成! 共找到 {sum(1 for line in open(output_file, 'r'))} 个文件")
    print(f"结果已保存至: {os.path.abspath(output_file)}")

if __name__ == "__main__":
    # 设置你的根目录路径（替换为实际路径）
    # target_folder = r"C:/Users/97352/Desktop/2025"  # Windows路径示例
    target_folder = r"C:/Users/97352/Desktop/数据分析/数据分析"  # Windows路径示例
    # target_folder = "/path/to/your/folder"  # Linux/Mac路径示例
    
    # 执行查找
    find_excel_files(target_folder)