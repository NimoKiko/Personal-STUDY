'''
1.len(): 统计容器的个数

2.max(): 最大元素

3.min(): 最小元素
'''
my_list = [1,2,3,4,5]

my_tuple = (1,2,3,4,5)

my_str = "12345"

my_set = {1,2,3,4,5}

my_dict = {"key1":1,"key2":2,"key3":3,"key4":4,"key5":5}

print(f"容器的最大元素是:{max(my_list)}")
print(f"容器的最小元素是:{min(my_list)}")

'''
4.容器的通用转换功能
  - list(容器)
  - str(容器)
  - tuple(容器)
  - set(容器)
'''

print(f"转换的结果是:{tuple(my_str)}")
print(f"转换的结果是:{str(my_str)}")
print(f"转换的结果是:{list(my_str)}")
print(f"转换的结果是:{set(my_str)}")

'''
5.容器排序
  - sorted(容器)
'''
print(sorted(my_list[::-1]))