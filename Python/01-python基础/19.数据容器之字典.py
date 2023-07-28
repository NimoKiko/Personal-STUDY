'''
1.字典的定义：
  - {key: value, key: value, ...}
  - my_dict = {key: value, key: value, ...}
  - 定义空字典：
    - my_dict = {}
    - my_dict = dict()
'''
# my_dict = {
#     "zhouyiran": 182,
#     "gongjun": 188,
#     "hanye": 188
# }

'''
2.字典的key不可以重复

3.通过key获取字典值
  - dict["key"]
'''
# result = my_dict["zhouyiran"]
# print(result)

'''
4.定义嵌套字典

'''
score_dict = {
    "math": {
        "zhouyiran": 148,
        "suzaizai": 98,
        "gongjun": 140
    },
    "english": {
        "zhouyiran": 90,
        "suzaizai": 138,
        "gongjun": 120
    }
}
'''
5.从嵌套字典中获取数据
'''
# target = score_dict["math"]["zhouyiran"]

# print(target)

'''
6.字典的修改操作
  - dict["key"] = value
  - 如果存在，则修改，反之则新增元素

7.删除字典的元素
  - dict.pop("key")

8.清空字典
  - dict.clear()

9.获取字典全部的key值
  - dict.keys()
'''
# print(score_dict["math"].keys())

'''
10.遍历字典
  - for循环
'''
for key in score_dict["math"].keys():
    print(score_dict["math"][key])

for item in score_dict:
    print(score_dict[item])
'''
11.统计字典内的元素数量
  - len(dict)
'''
