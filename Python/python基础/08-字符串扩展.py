'''
1.字符串三种定义方式：
  - 单引号定义法
  - 双引号定义法
  - 三引号定义法

2.在字符串内包含双引号

3.字符串的拼接，使用 + 进行拼接
'''

string1 = 'this is String one'
string2 = "this is String two"
string3 = '''
this is 
String three
'''
print(string1, string2, string3)

string4 = 'this is "string2" ,or use \"this way\"'
print(string4)

'''
4.字符串格式化
  - 使用 % 作为占位符
  - %s 表示用一个变量放入s所在的位置
  - 多个变量需要用括号包裹
  - 数字类型使用%s会转化为String类型
  - %d 主要用于Number类型的占位
  - %f 主要用于浮点数的占位
'''
name = 'Lisa'
age = 18
cost = 19.99
print('my name is %s, im %d years old, i bought sth cost %f yuan' %
      (name, age, cost))

'''
5.格式化精度控制
 - 使用辅助符号 m.n控制数据的宽度和精度
 - m,控制宽度，要求是数字（置宽度小于数字自身则不生效）- 很少使用
 - n,控制精度，要求是数字，四舍五入
'''
print("%.2f" % cost)

'''
6.快速格式化语法
  - f"内容{变量}"
  - 不做精度控制，原样输出
'''
print(f"my name is {name}, im {age} years old, i bought sth cost {cost} yuan")

'''
7.表达式的格式化
  - f"内容{表达式}"
  - 占位符的方式也适用于表达式
'''
print('the result of 1*1 = %d' % (1 * 1))
print(f'the result of 1*1 = {1 * 1}')

'''
课后练习
'''
name = '文化有限公司'
stock_price = 19.99
stock_code = "002008"
stock_price_daily_growth_factor = 1.2
groth_days = 7

finally_stock_price = stock_price * stock_price_daily_growth_factor ** groth_days

print(f"公司：{name}，股票代码：{stock_code}，当前股价：{stock_price}")
print("每日增长系数：%.1f，经过%d天的增长后，股价达到了：%.2f" %
      (stock_price_daily_growth_factor, groth_days, finally_stock_price))
