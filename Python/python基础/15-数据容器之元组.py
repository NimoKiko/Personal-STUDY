'''
1.元组:元组一旦定义完成，不可修改

2.元组的定义:
  - 使用()直接定义:(value1, value2, ...)
  - tuple_name = (value1, value2, value3, ...)
  - 定义空元组：
    - tuple_name = ()
    - tuple_name = tuple()
'''
flower_tuple = ("tulip", "rose", "pine")
number_tuple = (1, 2, 3, 4, 6, 3, 2, 4, 2, 1, 1, 2)
# print(flower_tuple)

'''
3.元组嵌套元组
'''
tuple_tuple = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

'''
4.下标索引取出元素
  - tuple[index]
'''
# print(flower_tuple[0])

'''
5.统计元组中的元素个数
  - tuple.count(value)
'''
# print(number_tuple.count(2))

'''
6.元组的遍历
  - while
  - for
'''
# index = 0
# while index < len(number_tuple):
#     print(number_tuple[index])
#     index += 1

for item in number_tuple:
    print(item)

'''
tips:如果在元组中定义了一个列表，可以修改元组中的列表中的值，但是不能修改元组
'''
