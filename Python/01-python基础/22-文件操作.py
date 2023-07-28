'''
1.文件编码: 翻译的规则
  - UTF-8
  - GBK
  - Big5
  - ...
  - 除非有特殊需求，一律使用UTF-8即可

2.文件的读取操作
  - 打开文件: open(name, mode, encoding)
    - name: 文件路径
    - mode: 读写文件的模式,r(只读), w(只写), a(追加)
    - encoding: 编码格式
  - 读写文件: 
  - 关闭文件: f.close()
'''
# f = open("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/01-first.txt","r",encoding="UTF-8")

# f.read() 读取文件数据
#  - read()可传入参数：num 表示要读取的字节数
#  - read()可不传入参数，表示读取全部数据
# print(f.read())

# f.readlines()
#  - 表示读取文件的全部行，返回一个列表
# lines = f.readlines()
# print(lines)

# f.readline()
#  - 一次读取一行
# print(f.readline())
# print(f.readline())
# print(f.readline())
# print(f.readline())

# for循环读取文件
# for item in f:
#     print(item)

# 关闭文件
# f.close() 

# with open()语法
# with open("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/01-first.txt","r",encoding="UTF-8") as f:
#     for item in f:
#         print(item)

'''
练习：统计02-second.txt中有多少个 “人” 
'''
# total = 0
# with open("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/02-second.txt","r",encoding="UTF-8") as f:
#     for line in f:
#         total += line.count("人")

# print(total)

# 写入文件
#  - f.write()
# f = open("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/03-third.txt","w",encoding="UTF-8")
# f.write("this is a content to write in the third.txt file")
# 文件刷新
#  - f.flush()
#  - 直接调用write()并不会写入文件，只有当调用了flush()后，才会写入
# f.flush()

# 将模式替换为 "a" 文件不存在则会创建文件，存在就会在文件中追加

'''
综合案例：读取文件，将文件写出到bill.txt.bak文件作为备份，同时，标记为测试的数据丢弃
'''
# 打开文件
f = open("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/bill.txt","r",encoding="UTF-8")
# 获取每一行
lines = f.readlines()

index = 0 
# 遍历
while index < len(lines) :
    # 删除测试数据
    if lines[index].count("测试") == 1 :
        lines.pop(index)
        index -= 1
    index += 1

# 关闭文件
f.close()

# 打开文件（没有文件则创建文件）
f = open("C:/Users/quyixing/Desktop/mine/Python/python基础/22-文件操作/bill.txt.bak","a",encoding="UTF-8")
# 遍历
for line in lines:
    # 将数据写入缓存
    f.write(line)
# 写入文件
f.flush()
# 关闭文件
f.close()