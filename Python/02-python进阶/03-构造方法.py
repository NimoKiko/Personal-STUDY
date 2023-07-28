'''
1.构造方法
  - 在类中创建__init__()方法，就可在创建对象的时候，通过传参，为对象属性赋值
  - 类似JavaScript中的constructor()方法

2.魔术方法: 内置的类方法
  - __init__: 构造方法
  - __str__: 字符串方法
  - __lt__: 小于、大于符号比较
  - __le__: 小于等于、大于等于符号比较
  - __eq__: ==符号比较
'''
class Student:
    # 构造方法
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
        print("创建了一个student对象")

    # 字符串方法
    def __str__(self):
        return f"Student类对象,name={self.name},age={self.age}"

    # 小于、大于符号比较
    def __lt__(self, other):
        return self.age < other.age

    # 小于等于、大于等于符号比较
    def __le__(self, other):
        return self.age <= other.age 
    
    # 等于符号比较
    def __eq__(self, other):
        return self.age == other.age


std1 = Student("lisa", 20, "male")
std2 = Student("Nemo", 22, "male")
std3 = Student("Auto", 22, "male")

print(std1.name)
print(std1)
print(std1 > std2)
print(std3 <= std2)
print(std2 == std3)
