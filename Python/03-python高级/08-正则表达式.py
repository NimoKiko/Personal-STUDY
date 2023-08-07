'''
1.正则表达式
  - match(): 从头匹配
  - search(): 在整个字符串中寻找，找到一个之后就停止
'''
# re : 正则表达式的包
import re

s = "python study wuyulunbi hhh python study wuyulunbi hhh python study wuyulunbi hhh python study wuyulunbi hhh"

match_result = re.match("python", s)

search_result = re.search("study", s)

findAll_result = re.findall("wuyulunbi", s)

print(match_result)
print(search_result)
print(findAll_result)

'''
2.元字符匹配规则:
  - . : 匹配任意字符
  - []: 匹配[]中列举的字符
  - \d: 匹配数字
  - \D: 匹配非数字
  - \s: 匹配空白
  - \S: 匹配非空白
  - \w: 匹配单词字符
  - \W: 匹配非单词字符
3.数量匹配规则:
  - *: 匹配钱一个规则的字符出现0至无数次
  - +: 匹配钱一个规则的字符出现1至无数次
  - ?: 匹配前一个规则的字符出现0次或1次
  - {m}: 匹配前一个规则的字符出现m次
  - {m,}: 匹配钱一个规则的字符最少出现m次
  - {m,n}: 匹配前一个规则的字符出现m到n次
4.边界匹配:
  - ^: 匹配字符串开头
  - $: 匹配字符串结尾
  - \b: 匹配一个单词的边界
  - \B: 匹配非单词的边界
5.分组匹配:
  - | : 匹配左右任意一个表达式
  - (): 将括号中字符作为一个分组
'''
# str = "wuyulunbi @@#$%python !!!1231^&*&^12131wuyulunbi"

# res = re.findall(r'[0-9]',str)

# print(res)

'''
案例练习1:
匹配账号,只能由字母和数字组成，长度限制再6-10位
'''
reg1 = r'^[0-9a-zA-Z]{6,10}$'

# res = re.findall(reg1,"1234qic1111")

'''
案例练习2:
匹配QQ号:要求纯数字,长度5-11位,第一位不为0
'''
reg2 = r'^[1-9]\d{4,10}$'

# res = re.findall(reg2,'11117352823')

'''
案例练习3:
匹配邮箱,只允许qq、163、gmail这三种邮箱地址
973528232@qq.com
'''
reg3 = r'(^[\w-]+(\.[\w-]+)*@(qq|163|gmail)(\.[\w-]+)+$)'

res = re.findall(reg3,"973528232@qq.com")


print(res)