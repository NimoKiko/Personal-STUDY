import os
import tkinter as tk
from tkinter import filedialog
import chardet


def find_files(root_dir, target_dir="C:/Users/97352/Desktop/new/data.txt"):
  print(f"查找 {root_dir} 中的文件...")
  
  
  with open(target_dir, 'w', encoding='utf-8') as file_out:
    for dirpath, dirnames, filenames in os.walk(root_dir):
      # print(filenames)
      for filename in filenames:
        # print(filename)
        file_out.write(filename + '\n')
        
  print(f"\n完成! 共找到 {sum(1 for line in open(target_dir, 'r'))} 个文件")
  print(f"结果已保存至: {os.path.abspath(target_dir)}")
  
  
  return 0

# 选择文件夹
def select_folder():
  root = tk.Tk()
  root.withdraw() # 隐藏主窗口
  
  folder_path = filedialog.askdirectory(title="选择包含报警文件的文件夹")
  return folder_path

if __name__ == "__main__":
  
  # 获取文件路径
  root_dir = select_folder()
  
  find_files(root_dir)