'''
1.函数：组织好的，可重复使用的用来实现特定功能的代码段。

2.函数的定义格式：params和return可省略
  def function_name(params):
      run...
      ....
      return value
'''
# def countLength(data):
#     count = 0
#     for i in data:
#         count += 1
#     return count

# name = 'iauhoijodq'
# length = countLength(name)
# print(length)

'''
3.函数传参的使用：在函数计算的时候能接受外部提供的数据
'''
# def add(x, y):
#     return x + y

# result = add(1, 2)
# print(result)

'''
4.函数说明文档
'''
# def multiply(x, y):
#     """
#     multiply()方法可以做两个数相乘
#     - param x:表示参与计算的第一个数字
#     - param y:表示参与计算的第二个数字
#     - return:返回两数相乘的结果
#     """
#     result = x * y
#     return result

'''
5.函数的嵌套调用
'''
# def fun_a():
#     print("----2----")

# def fun_b():
#     print("----1----")

#     fun_a()

#     print("----3----")

# fun_b()

'''
6.函数中变量的作用域
  - 局部变量:定义在函数体内部的变量，作用域主要在函数体内部生效
            可通过global关键字将局部变量声明为全局变量
  - 全局变量:定义在函数体外部，作用域全局生效
'''
# def testA():
#     num = 100

# print(num) # 提示未定义
# num = 100
# def testA():
#     num = 500   # 这是个局部变量，和外部的num无关
#     print(num)

# def testB():
#     global num
#     num = 200   # 通过global声明之后，num成为全局变量
#     print(num)

# testA()
# testB()
# print(num)

'''
综合案例：ATM机
'''

balance = 500000

# 初始化函数
def init():
    print("--------------------------------主菜单-------------------------------------")
    print("Hello admin, Welcome to use NEMO ATM System, please choose your service:")
    print(f"[1]: check balacne")
    print(f"[2]: deposit")
    print(f"[3]: withdraw money")
    print(f"[0]: exit")
    service_dial = int(input("please enter your choice:"))
    if service_dial == 1:
        check_balance()
    if service_dial == 2:
        deal(service_dial)
    if service_dial == 3:
        deal(service_dial)
    if service_dial == 0:
        return None
    
    return True
        

# 查询余额的函数
def check_balance():
    print("--------------------------------查询余额-------------------------------------")
    print(f"Hello admin, your remaining balance is {balance}")
    input("press 'enter' to return")
    return None

# 存取款函数
def deal(type):
    global balance
    if type == 2:
        # 存钱操作
        print("--------------------------------存款-------------------------------------")
        expect_deposit =  int(input(f"please enter the amount of money you want to deposit:"))
        balance += expect_deposit;
        print(f"admin, your remaining balance is {balance}")
        input("press 'enter' to return")
        return None
    if type == 3:
        # 取钱操作
        print("--------------------------------存款-------------------------------------")
        expect_money =  int(input(f"please enter the amount of money you want to take out:"))
        balance -= expect_money;
        print(f"admin, your remaining balance is {balance}")
        input("press 'enter' to return")
        return None
    
while True:
   isLoop = init()
   if not isLoop:
       break