'''
- file_util.py(文件处理相关工具)
  1 函数: print_file_info(file_name),接收传入文件的路径，打印文件内的全部内容
  如文件不存在则捕获异常，输出提示信息，通过finally()关闭文件对象
  2 函数: append_to_file(file_name, data),接收文件路径以及传入数据，将数据追加到写入的文件中
'''
'''
printFileInfo(file_name),接收传入文件的路径，打印文件内的全部内容
  - param1: 文件路径
'''
def printFileInfo(fileName: str):
    f = None
    try:
        f = open(fileName,"r",encoding="utf-8")
        for item in f:
            print(item)
    except Exception as err:
        print(err)
    finally:
        if f:
            f.close()

'''
appendToFile(file_name, data),接收文件路径以及传入数据，将数据追加到写入的文件中
'''
def appendToFile(fileName: str, data: str):
    file = None
    try:
        file = open(fileName,"a",encoding="utf-8")
        file.write(data)
        file.flush()
    except Exception as err:
        print(err)
    finally: 
        if file:
            file.close()