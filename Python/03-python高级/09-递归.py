'''
1.递归
'''


def add(a, res):

    res = res + a
    if a != 100:
        a += 1
        return add(a, res)
    else:
        return res


print(add(99, 0))
