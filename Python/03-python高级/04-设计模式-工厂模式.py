'''
1.工厂模式
  - 当需要大量创造一个类的实例时，可以使用工厂模式
  - 优点:
    - 大批量创建对象的时候有统一的入口，易于代码维护
    - 当发生修改，只要修改工厂类创建的方法即可
'''


class Person:
    pass


class Worker(Person):
    pass


class Student(Person):
    pass


class Teacher(Person):
    pass


class Factory:

    def get_person(self, type):
        if type == "w":
            return Worker()
        if type == "s":
            return Student()
        if type == "t":
            return Teacher()


# 创建工厂类
factory = Factory()

# 通过工厂类创建对象
worker = factory.get_person("w")
student = factory.get_person("s")
teacher = factory.get_person("t")
