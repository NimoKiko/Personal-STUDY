'''
案例：读取hello.txt文件内各单词出现的次数
'''
from pyspark import SparkConf, SparkContext
import os

os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_test")

sc = SparkContext(conf=conf)
# 打开文件
f = open(
    "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/数据计算数据/hello.txt",
    "r",
    encoding="utf-8"
)
# 创建空数组
data_list = []
# 解除嵌套
for item in f.readlines():
    data_list += item.strip().split(" ")

# 构造KV数据结构
i = 0
while(i < len(data_list)):
    data_list[i] = (data_list[i],1)
    i += 1

# print(data_list)
# 创建rdd
rdd = sc.parallelize(data_list)
# 使用reduceByKey()算子
res = rdd.reduceByKey(lambda x, y: x + y)

print(res.collect())

sc.stop()