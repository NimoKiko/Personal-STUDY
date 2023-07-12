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
案例：求1-100的和
'''
num = 1
total = 0
while num <= 100 :
    total += num
    num += 1

print(total)