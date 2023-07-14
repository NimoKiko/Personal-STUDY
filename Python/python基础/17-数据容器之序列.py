'''
1.序列：内容连续，有序，可使用下标索引的一类数据容器
  - 列表，元组，字符串，均可视作序列。

2.切片：从序列中，从指定的位置开始，依次取出元素到指定位置结束，得到一个新序列。
  - 起始下标：可以为空，表示从头开始
  - 结束下标：可以为空，表示到最后结束
  - 步长：取元素的间隔

3.list切片：
  - list[start:end:step]
'''
# my_list = [0,1,2,3,4,5,6,7,8]
# result1 = my_list[1:5]   #默认step为1，可省略
# print(result1)
# print(my_list)

'''
4.tuple切片
  - tuple(start:end:step)
'''
# my_tuple = (0,1,2,3,4,5,6)
# result2 = my_tuple[1:4]
# print(result2)

'''
5.str切片
  - str[start:end:step]
'''
# my_str = "0123456789"
# result3 = my_str[3:8]
# print(result3)

'''
6.步长为负，则从后往前
  - step = -1 相当于反转序列
'''
# print(my_list[::-1])
# print(my_tuple[::-1])
# print(my_str[::-1])

# print(my_list[::-2])
# print(my_tuple[::-2])
# print(my_str[::-2])

'''
练习："大家好，我是练习时常两年半，个人练习生蔡徐坤，我的爱好是唱、跳、rap、篮球。"
从中提取 "坤徐蔡"
'''

str = "大家好，我是练习时常两年半，个人练习生蔡徐坤，我的爱好是唱、跳、rap、篮球。"

new_str = str[::-1]
print(new_str)
new_list = new_str.split("，")
print(new_list)

result = new_list[1][0:3]

print(result)