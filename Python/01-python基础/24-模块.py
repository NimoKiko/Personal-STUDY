'''
1.模块
  - [from 模块名] import [模块 | 类 | 函数 | 变量 | *] [as 别名]
'''
# 导入time模块 可以使用time中的全部功能
import time
# 睡眠函数
# time.sleep(5)
# print('111')

# 定向导入模块中的所需部分
from time import asctime
# p = asctime()
# print(p)

from time import *
# t = localtime()
# print(t)

from time import localtime as lt

# t = lt()
# print(t)
