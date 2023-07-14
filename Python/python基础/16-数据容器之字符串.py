'''
1.字符串的下标索引
  - str[index] 可取到对应下标的字符
'''
# 定义一个字符串
my_str = "this is an example"

# val = my_str[0]
# val = my_str[-1]
# print(val)

'''
2.修改对应下标的字符
  - 字符串只读，不可修改
'''
# my_str[0] = "e"
# print(my_str)  # 报错

'''
3.查找指定字符在字符串的位置
  - str.index(val)
'''
# val = my_str.index("i")
# print(val)

'''
4.替换字符串中的全部指定字符
  - str.replace(val) 返回一个新字符串，源字符串不会被修改
'''
# new_my_str = my_str.replace("i","a")
# print(new_my_str)

'''
5.字符串的分割
  - str.split(分隔符字符串) 返回一个列表对象，原字符串不会被修改
'''
new_str = my_str.split(' ')
print(new_str)  # 打印：['this', 'is', 'an', 'example']

'''
6.字符串的规整操作
  - str.strip() 去除前后指定字符
'''
new_str = "123this is the second example123"
# print(new_str.strip("123"))   # 打印：this is the second example

'''
7.统计某字符在字符串中出现的次数
  - str.count(val)
'''
# print(new_str.count("e"))

'''
8.统计字符串的长度
  - len(str)
'''
print(len(new_str))