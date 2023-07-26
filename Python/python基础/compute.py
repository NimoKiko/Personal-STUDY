# 这个列表中表示，其他文件导入后，可以使用的函数列表
# __all__ = ['plus']

# 加法
def plus(a, b):
    return a + b

# 减法
def subtract(a, b):
    return a - b

# 乘法
def multiply(a, b):
    return a * b

# 除法
def divition(a, b):
    return a / b

# 只有当前函数直接执行才会进入
if __name__ == '__main__':
    print(plus(1,2))
    