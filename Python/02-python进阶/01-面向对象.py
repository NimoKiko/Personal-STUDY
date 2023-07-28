'''
1.设计类(class)
  class className:
      params = ...
      ...

2.创建对象
  obj1 = className()
  obj2 = className()
  obj3 = className()
  .....

3.对象属性赋值
  obj1.params = ...
  ....
'''
# 设计一个类
class Person:
    name = None         # 姓名
    gender = None       # 性别
    nationality = None  # 国籍
    native = None       # 籍贯
    age = None          # 年龄
# 创建一个对象
people1 = Person()
# 对对象进行赋值
people1.name = "lisa"
people1.gender = "male"
people1.nationality = "china"
people1.native = "shanghai"
people1.age = 18

print(people1.name)
print(people1.gender)
print(people1.nationality)
print(people1.native)
print(people1.age)
