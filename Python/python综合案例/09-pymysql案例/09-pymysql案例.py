# 导入pymysql
from pymysql import Connection

from data_define import *
from file_define import *

# 读取文件
txt_f = TextFileReader(
    "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/面向对象案例数据/2011年1月销售数据.txt"
)
json_f = JsonFileReader(
    "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/面向对象案例数据/2011年2月销售数据JSON.txt"
)
# 获取数据
Jan_list = txt_f.read_data()
Feb_list = json_f.read_data()
data_list = Jan_list + Feb_list

# for item in data_list:
#     print(item)
# 创建数据库连接对象
conn = Connection(
    host="localhost",
    port=3306,
    user="root",
    password="root",
    autocommit=True
)
# 获取游标对象(进行CRUD操作)
cursor = conn.cursor()
# 选择数据库
conn.select_db("nodepractise")
# 插入数据
for item in data_list:
    sql = f"insert into orders(order_date, order_id, money, province)" \
          f"values('{item.date}', '{item.order_id}', {item.money}, '{item.province}')"
    # print(sql) 
    cursor.execute(sql)

# 关闭数据库
conn.close()
