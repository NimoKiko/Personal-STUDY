'''
1.类使用的语法:
  class 类名称:
      类的属性: 定义在类中的变量(成员变量)
      类的行为: 定义在类中的函数(成员方法)
        - 在类中定义的函数,称为方法
        - 要想在方法中调用类中的变量,必须使用self
'''
class Student:
    name = None
    age = None

    def sayHi(self):
        print(f"Hello, my name is {self.name}")

    def saySth(self, msg):
        print(f"i wanna say that {msg}")        


std = Student()

std.sayHi()
std.saySth("i win!")

'''
2.类和对象的关系：
  - 类就像个设计图纸，对象则是根据这个设计图纸产生的具体的产品
  - 面向对象，就是按照类创建出对象，让对象实现一些功能
  - 
'''
# 演示类和对象的关系
# 设计一个闹钟类
class Clock:
    id = None
    price = None

    # 响铃的方法
    def ring(self):
        import winsound
        winsound.Beep(2000,3000)

clock = Clock()

clock.id = "0071129"
clock.price = "$78"

clock.ring()