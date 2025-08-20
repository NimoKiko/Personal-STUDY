import os
import pandas as pd
from tqdm import tqdm  # 用于显示进度条，可选
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
                
            # 检查文件名是否包含关键词（不区分大小写）
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

if __name__ == "__main__":
    # 配置参数
    root_directory = r"C:/Users/97352/Desktop/2025"  # 替换为你的根目录路径
    # root_directory = r"C:\Users\97352\Desktop\数据分析\数据分析"  # 替换为你的根目录路径
    output_filename = r"C:/Users/97352/Desktop/2025/合并结果.xlsx"  # 输出文件名
    # output_filename = r"C:\Users\97352\Desktop\数据分析\数据分析\合并结果.xlsx"  # 输出文件名
    
    merge_excel_files(root_directory, output_filename)