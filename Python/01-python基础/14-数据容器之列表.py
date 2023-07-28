'''
1.数据容器：可以容纳多份数据的数据类型，每一个元素可以是任意数据类型
  - 列表(list)
  - 元组(tuple)
  - 字符串(str)
  - 集合(set)
  - 字典(dict)

2.list(列表):
  - 列表的定义格式: params_name = [元素1, 元素2, ...]
'''
flower_list = ['tulip','rose','pine']
number_list = [1,2,3,1,2,1,1,3,2]
# print(type(flower_list)) # 输出<class 'list'>

'''
3.嵌套列表的定义
'''
# my_list = [[1,2,3],[4,5,6],[7,8,9]]

'''
4.列表的下标索引:list[index]
'''
# print(flower_list[0])
# print(flower_list[1])
# print(flower_list[2])
# print(my_list[0][1])

'''
tips: 方法即为定义在class内的函数
5.查找某元素的下标
  - 语法: list.index()
'''
# result = flower_list.index("rose1") # 输出alueError: 'rose1' is not in list
# result = flower_list.index("rose")
# print(result)

'''
6.修改特定下标索引的值
'''
# flower_list[0] = "bamboo"
# print(flower_list)

'''
7.在列表中插入元素
  - list.insert(index, value)
'''
# flower_list.insert(5,"bamboo")
# print(flower_list)

'''
8.在列表最后追加一个元素
  - list.append(value)
  - list.extend(list2) 把list2中的元素追加到list后面
'''
# flower_list.append("bamboo")
# print(flower_list)

# number_list = [1,2,3,4]
# flower_list.extend(number_list)
# print(flower_list)

'''
9.删除列表中的元素
  - del list[index]
  - list.pop(index) pop()方法有返回值,返回的是删除的元素
  - list.remove(value) 删除value在列表中的第一个匹配项
  - list.clear() 清空列表
'''
# element = flower_list.pop(1)
# print(flower_list, element)

# del flower_list[1]
# print(flower_list)

# number_list.remove(2)
# print(number_list)

# flower_list.clear()
# print(flower_list)

'''
10.统计某元素在列表中的数量
  - list.count(value)
  - len() 统计列表中总共有多少元素
'''

# print(number_list.count(1))

# length = len(number_list)
# print(length)

'''
11.循环遍历列表
  - while
  - for
'''
def loopWithWhile( ):
   index = 0
   while index < len(number_list):
      print(number_list[index])
      index += 1 

def loopWithFor():
    for item in number_list:
       print(item)

# loopWithWhile()
loopWithFor()