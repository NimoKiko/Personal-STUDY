from email.mime import audio
from pydub import AudioSegment
import tkinter as tk
from tkinter import filedialog, messagebox
import os


def init():
    print("--------------------音频文件格式转换工具-------------------------")
    print("[1] 单个音频文件操作")
    print("[2] 批量操作")
    print("[0] 退出")
    input_num = int(input("请选择(回车以确定选择):"))

    if input_num == 1:
        single_operate()

    if input_num == 2:
        multiple_operate()

    if input_num == 0:
        return

# 单个文件操作


def single_operate():
    # 文件路径
    file_path, file_name = select_file()
    # audio = AudioSegment.from_file(file_path)

    print(f"选中的文件为:{file_path}")
    print("请选择想要转换的格式:")
    print("[1] mp3")
    print("[2] wav")
    print("[3] ogg")
    print("[4] mp4")
    input_num = int(input("请选择(回车以确认):"))

    try:

        if input_num == 1:
            convert_audio(file_path, file_name, "mp3")
            print(f"转换成功")
        if input_num == 2:
            convert_audio(file_path, file_name, "wav")
            print(f"转换成功")
        if input_num == 3:
            convert_audio(file_path, file_name, "ogg")
            print(f"转换成功")
        if input_num == 4:
            convert_audio(file_path, file_name, "mp4")
            print(f"转换成功")
    except Exception as e:
        print(f"发生如下错误:{e}")

# 批量文件操作


def multiple_operate():
    print("敬请期待~")
    init()

# 文件格式转换


def convert_audio(file_path, output_filename, output_format):
    audio = AudioSegment.from_file(file_path)
    audio.export(
        f"C:/Users/97352/Desktop/{output_filename}.{output_format}", format=output_format)

# 打开文件资源管理器


def select_file():
    # 创建主窗口（可选）
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口

    # 打开文件选择对话框
    file_path = filedialog.askopenfilename(
        title="选择文件",
        filetypes=[
            ("音频文件", "*.mp3"),
            ("音频文件", "*.mp4"),
            ("音频文件", "*.wav"),
            ("音频文件", "*.flac"),
            ("音频文件", "*.ogg"),
        ]  # 可选文件类型过滤
    )

    # 打印选择的文件路径
    if file_path:
        file_full_name = os.path.basename(file_path)  # 关键：获取文件名
        # 提取不带扩展名的文件名
        file_name = os.path.splitext(file_full_name)[0]
        print("完整路径:", file_path)
        print("文件名:", file_name)
        return file_path, file_name  # 返回路径和文件名
    else:
        print("未选择文件")


# 入口函数
if __name__ == "__main__":
    init()
