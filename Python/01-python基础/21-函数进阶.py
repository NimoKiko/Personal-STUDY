'''
1.函数的多返回值
  - return value1, value2...
'''
# def test_return():
#     return 1, 2

# x, y = test_return()
# print(x, y)

'''
2.函数的多种传参方式：
  - 位置参数
  - 关键字参数
  - 缺省参数
  - 不定长参数
'''


def params(name, age=18, gender="男"):
    print(name, age)


# 位置参数
params("小明", 20)
# 关键字参数
# - 不固定参数顺序,可以和位置参数混合使用
params(name="小李", age=20)
# 缺省参数
# - 不传参数则使用默认的参数
# - 默认值必须在最后
params('lisa')
# 不定长参数
# - function(*arge) 位置不定长


def params2(*args):
    print(args)
# - function(**kwargs) 关键字不定长
# - 必须以key=value的形式传递

# def params3(*args):
#     print(args)
# params2(12, 'tom', 1231)


'''
3.函数作为参数传递
'''


def test_func(fun):
    result = fun(1, 2)
    print(result)


# def compute(x, y):
#     return x + y

# test_func(compute)

'''
4.匿名函数：
  - lambda 传入参数: 函数体
  - 匿名函数只用于构建一个函数，只用一次的场景
  - 函数体中只能写一行代码
'''
test_func(lambda x, y: x * y)
