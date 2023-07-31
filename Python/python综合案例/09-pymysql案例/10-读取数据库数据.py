from pymysql import Connection
import json
# 创建连接对象
conn = Connection(
    host="localhost",
    port=3306,
    user="root",
    password="root",
    autocommit=True
)
# 创建游标对象
cursor = conn.cursor()
# 选择数据库
conn.select_db("nodepractise")
# 读取数据
sql = "select * from orders"
cursor.execute(sql)

order_data = cursor.fetchall()
f = open("C:/Users/quyixing/Desktop/mine/Python/python综合案例/09-pymysql案例/orders.txt","a",encoding="utf-8")
for item in order_data:
    # print(item[3])
    data_dict: dict = dict()
    data_dict["date"] = str(item[0])
    data_dict["order_id"] = item[1]
    data_dict["money"] = item[2]
    data_dict["province"] = item[3]
    data_dict_json = json.dumps(data_dict,ensure_ascii=False)
    f.write(data_dict_json+"\n")
    f.flush()

# 关闭文件
f.close()
# 关闭连接
conn.close()