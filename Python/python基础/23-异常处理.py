'''
1.异常(bug)
  - 程序因为异常停止运行
  - 进行异常提醒，程序继续运行
'''
# f = open("d:/abc.txt","r",encoding="utf-8")  #运行时会抛出异常

'''
2.捕获异常
  try:
    可能发生的错误代码
  except:
    如果出现异常执行的代码
  else:
    如果没有异常执行
  finally:
    无论有无异常，都要执行
'''
# 例子1
# try:
#     f = open("d:/abc.txt","r",encoding="utf-8")
# except:
#     print("出现异常了，文件不存在，用w模式打开")
#     f = open("d:/abc.txt","w",encoding="utf-8")

# 例子2
# try:
#     print(Name)
# except NameError as err:
#     print(err)

# 例子3 捕获多个异常
# try:
#     1 / 0 
#     print(name)
# except (NameError, ZeroDivisionError) as err:
#     print(err)

# 例子4 捕获所有异常
# name = 'lisa'
# try:
#   print(name)
# except Exception as err:
#   print(err)
# else:
#   print("没有异常")

# 例子5 finally
try:
    f = open("d:/abcd.txt","r",encoding="utf-8")
except Exception as err:
   print(err)
   f = open("d:/abcd.txt","w",encoding="utf-8")
finally:
   
   f.close()
    