'''
1.集合：不支持重复元素且内部无序

2.定义方式：
  - {element1, element2, element3...}
  - element_name = {element1, element2, element3...}
  - element_name = set() 定义空集合
'''
my_set = {"asni", "hiwh", "diuwh", "hiwueh", "asni", "hiwh", "diuwh", "hiwueh", "asni", "hiwh", "diuwh", "hiwueh"}
# print(my_set)

'''
3.不支持下标索引访问

4.允许修改
  - set.add()
  - 添加重复元素会自动去重
'''
my_set.add("python")
# print(my_set)

'''
5.移除元素
  - set.remove(val)
'''
my_set.remove("hiwh")
# print(my_set)

'''
6.随机取出一个元素
  - set.pop()
  - 取出元素后，集合中删除该元素
'''
# val = my_set.pop()
# print(val)
# print(my_set)

'''
7.清空集合
  - set.clear()
'''
# print(my_set.clear())

'''
8.取两个集合的差集
  - set1.difference(set2)
  - 返回集合1有而集合2没有的部分，原集合不变
'''
set1 = {1,2,3}
set2 = {1,5,6}
set3 = set1.difference(set2)
print(set3)