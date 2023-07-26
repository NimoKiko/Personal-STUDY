'''
- str_util.py(字符串相关工具)
  1 函数: strReverse(s),接收传入字符串，将字符串反转返回
  2 函数: subStr(s,x,y), 按照下标x和y,对字符串进行切片
'''

'''
strReverse(s),接收传入字符串，将字符串反转返回
  - 传入参数: s 字符串
  - 返回: 反转后的字符串
'''
def strReverse(str: str):
    try:
        return str[::-1]
    except TypeError as err:
        print(err)


'''
subStr(s,x,y), 按照下标x和y,对字符串进行切片
  - param1: 一个字符串
  - param2: 从哪个位置开始进行切片
  - param3: 切片到哪个位置
  - param4: 步长(默认为1)
'''
def subStr(s: str, x: int, y: int, step = 1):
    try:
        return s[x:y:step]
    except TypeError as err:
        print(err)
