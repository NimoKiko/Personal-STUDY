'''
1.类型注解:
  - 为了第三方工具能识别出变量的类型来进行方法检索推荐
  - 帮助开发者自身对变量进行注释
  - 语法: 在变量名后加上 : 类型
'''
from typing import Union


def func1(data):
    # 没有对形参data进行类型注解
    # 在使用data时无法有推荐
    pass


def func2(data: list):
    # 对data进行注解，设定为list类型
    # 在使用data的时候通过 . 可以快速推荐list类型变量中含有的方法
    pass


'''
2.对返回值进行注解
'''
# def func3(x: int, y: int) -> list:
#     data = []
#     res = x + y
#     data.append(res)
#     return data

'''
3.Union类型
  - 导入Union包: from typing import Union
  - 使用Union可以进行联合类型注解，即可以注解多个类型
'''
def func4(data: Union[int, str, float]):
    pass
