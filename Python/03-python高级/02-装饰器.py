'''
1.装饰器:
  - 在不破坏目标函数原有代码和功能的基础上，为目标增加新功能
'''

# TODO：在不改变sleep()函数的前提下增加两个打印
# def sleep():
#     import random
#     import time
#     print("睡眠中....")
#     time.sleep(random.randint(1, 5))

# 定义一个 闭包，在闭包函数内部执行目标函数，并添加新功能
# def decorator(func):
    
#     def target():
#         print("我要睡觉了....")
#         func()
#         print("我起床了....")
    
#     return target

# fn = decorator(sleep)

# fn()

'''
2.语法糖写法:
  -
'''
def decorator(func):
    
    def target():
        print("我要睡觉了....")
        func()
        print("我起床了....")
    
    return target

@decorator
def sleep():
    import random
    import time
    print("睡眠中....")
    time.sleep(random.randint(1, 5))

sleep()