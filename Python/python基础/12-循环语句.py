'''
1.while 语句：
  while condition :
    run...
'''
# age = int(input("please enter your age:"))

# while age < 18:
#     print(f"you're {age}, you should go to school")
#     age += 1

# print(f"you're {age} now, you graduated from school!")

'''
2.案例1：求1-100的和
'''
# num = 1
# total = 0
# while num <= 100 :
#     total += num
#     num += 1

# print(total)

'''
3.案例2：猜数字
'''
# import random
# num = random.randint(1,100)

# isLoop = True
# print("-------------------------------------------")
# print("游戏开始")

# while(isLoop) :
#     guess = int(input("please guess a number:"))
#     if guess > num :
#         print("你猜大啦~")
#     if guess == num :
#         print("你猜中啦~")
#         isLoop = False
#     if guess < num :
#         print("你猜小啦~")
# print("-------------------------------------------")
# print("游戏结束")

'''
4.while循环的嵌套:
  while condition1:
      run...
      ....
      while condition2:
          run...
          ....

5.案例3:输出9*9乘法表
'''
# i = 1
# j = 1
# while i < 10:

#     while j < 10:
#         if j == 9:
#             print(f"{i} * {j} = {i * j}")
#             j += 1
#         else:
#             print(f"{i} * {j} = {i * j}\t", end="")
#             j += 1
#     i += 1
#     j = i
'''
6.for循环:
  for item in range:
      run...
      ...
'''
# name = 'zhouyiran'
# for x in name:
#     print(x)

'''
6.案例4:数一数有几个a
'''
# name = "zhouyiran is a very handsome boy"
# sum = 0
# for item in name:
#     if(item == 'a'):
#         sum += 1
# print(f"the number of 'a' is {sum}")

'''
7.range语句:
  - range(num):从0开始到num结束的数字序列，不含num本身
    eg:range(5)取到的数据是:[0,1,2,3,4]
  - range(num1, num2):获取从num1开始到num2结束的数字序列，不含num2本身
    eg:range(5,10)取到的数据是:[5,6,7,8,9]
  - range(num1, num2, step):获取从num1开始到num2结束的数字序列，不含num2本身，步长取step
    eg:range(5,10,2)取到的数据是:[5,7,9]
'''
# for item in range(10):
#     print(f"print {item + 1} times")

'''
8.for循环临时变量作用域
  - 规范上在for循环中定义的临时变量是不可以在for循环外使用的
  - 实际上在for循环中定义的临时变量是可以在for循环外使用的
  - 在编程规范上不建议,不允许在for循环体外使用临时变量
'''
# for item in range(5):
#     print(item)

# print(item)

'''
9.for循环的嵌套
  for item1 in range:
      run...
      ....
      for item2 in range:
          run...
          ....
10.break和continue: 循环中断
'''
# for item1 in range(1,11):
#     print(item1)
#     if item1 == 5:
#         break


# for item2 in range(1,11):
#     # print(item)
#     if item2 == 5:
#         continue
#     print(item2)

'''
11.综合案例：某公司，账户余额1w元，给20名员工发工资
  - 员工编号从1-20，依次领取，每人领取1000元
  - 领工资的时候，财务判断员工绩效(1-10分)随机生成，如果低于5，不发工资
  - 工资发完，结束。
'''
import random
count = 10000
salary = 1000
print("-------------------------------------")
print("开始发放工资")
for staff in range(1, 21):
    performance = random.randint(1, 10)
    if performance < 5:
        print(f"{staff}号员工绩效:{performance}不达标，不予发放工资。")
        continue
    else:
        if count > 0:
            print(f"{staff}号员工绩效:{performance}合格，发放工资{salary}元")
            count -= salary
        else:
            print(f"账户余额不足，剩下{2 - staff}名员工暂缓发工资")
            break;


print(f"工资发放结束，账户余额还剩{count}元")
print("-------------------------------------")
