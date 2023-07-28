'''
1. if语句的基本格式:
  if conditions :
      条件成立时，要做的事
'''
age = 19
if age >= 18:
    print('111')
    print("222")

print("333")

'''
2.if else 语句
  if conditions :
    run...
  else:
    run...
'''
age = int(input("please enter your age:"))

if age >= 18:
    print("门票费用10元")
else:
    print("免费进入~")

'''
3.if elif else语句的语法:
  if conditions :
    run...
  elif conditions :
    run...
  else:
    run...
'''
if age == 18:
    print('111')
elif age == 19:
    print('222')
else:
    print('333')

'''
4.判断语句的嵌套
'''
if age >= 18:
    print('you meet the condition 1')
    level = int(input("please enter your level:"))
    if level >= 3:
        print('you meet the condition 2')
    else:
        print('your level not meet the need, please upgrade~')
        