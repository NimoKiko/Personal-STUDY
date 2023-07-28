'''
1.python包：存放python模块的文件夹

2.python包中包含 __init__.py文件
'''
# import python_package.my_module1 as m1
# import python_package.my_module2 as m2

# m1.print_info("hello world")
# print(m2.getTime())

from python_package import *
my_module1.print_info("hello world")
# 无法导入my_module2 因为在__all__中设置了，可导入的列表