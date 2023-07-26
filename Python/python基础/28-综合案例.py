'''
创建一个自定义包，名称为：my_utils
在包内有两个模块：
  - str_util.py(字符串相关工具)
    1 函数: str_reverse(s),接收传入字符串，将字符串反转返回
    2 函数: substr(s,x,y), 按照下标x和y,对字符串进行借钱
  - file_util.py(文件处理相关工具)
    1 函数: print_file_info(file_name),接收传入文件的路径，打印文件内的全部内容
    如文件不存在则捕获异常，输出提示信息，通过finally()关闭文件对象
    2 函数: append_to_file(file_name, data),接收文件路径以及传入数据，将数据追加到写入的文件中
'''
from my_utils import str_util as su
from my_utils import file_util as fu

string1 = su.strReverse("abcdefg")

print(string1)

string2 = su.subStr("abcdefg",0,None);

print(string2)

# fu.printFileInfo("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/comprehensiveText.txt")

fu.appendToFile(
    "C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/comprehensiveText.txt",
    "\nthis is a new content which appended at the end of the context"
    )