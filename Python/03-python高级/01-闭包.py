'''
1.闭包
  - 内层函数调用了外层函数的变量，内层函数就是闭包
  - 对于外层函数outer来说，变量临时存在，对于内部函数来说，调用外层函数的变量可持续存在。
  - 使用nonlocal关键字就可在内部函数中修改外部函数的变量
'''
# def outer(logo):
    
#     def inner(msg):
#         print(f"<{logo}>{msg}<{logo}>")

#     return inner

# fn1 = outer("哥哥你别跑")
# fn1("吴御伦比")

# 使用nonlocal关键字
# def outer(num1):
    
#     def inner(num2):
#         nonlocal num1
#         num1 += num2
#         print(num1)

#     return inner

# num1 = 10
# fn1 = outer(1)
# fn1(10)
# fn1(10)

'''
3.使用闭包实现ATM案例
'''
def account(balance):
    
    def atm(money, deposit=True):
        nonlocal balance
        if deposit:
            balance += money
            print(f"执行存款操作,余额+{money},账户余额:{balance}")
        else:
            balance -= money
            print(f"执行取款操作,余额-{money},账户余额:{balance}")
        
    return atm

# 设置账户余额
atm = account(1000)
atm(100)
atm(200)
atm(800)
atm(1000, False)