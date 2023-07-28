'''
1.多态: 多种状态，完成某个行为时，使用不同对象会得到不同状态

2.抽象类: 含有抽象方法的类称为抽象类
  - 用于做顶层设计
  - 构建实例的时候一般使用实现类，不使用抽象类

3.抽象方法: 方法是空实现的(pass)称之为抽象方法
'''
# 抽象类
class Animal:
    # 空实现，父类决定有哪些方法，但不在父类中具体实现
    def speak(self):
        pass
    
class Dog(Animal):
    def speak(slef):
        print("汪汪汪~")

class Cat(Animal):
    def speak(self):
        print("喵喵喵~")

def make_noise(animal: Animal):
    animal.speak()

dog = Dog()
cat = Cat()

make_noise(dog)
make_noise(cat)