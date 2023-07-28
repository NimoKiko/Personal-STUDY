'''
1.使用python 操作MySQL数据库
  - 安装: pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pymysql
  - 引入包: from pymysql import Connection
'''
from pymysql import Connection

conn = Connection(
    host="localhost",
    port=3306,
    user="root",
    password="root",
    autocommit=True  #设置自动提交
)

# 获取游标对象
# 使用游标对象进行sql的操作
cursor = conn.cursor()
# 选择数据库
conn.select_db("nodepractise")

cursor.execute("select * from user")
# 通过cursor.fetchall()获取查询到的数据
res: tuple = cursor.fetchall()

for item in res:
    print(item)
'''
2.进行插入操作的时候，需要使用commit()方法进行提交，否则不会修改
  - 可以在Connenction()中设置自动提交
'''
conn.close()