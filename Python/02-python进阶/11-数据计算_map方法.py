'''
1.map方法:
  - 传入一个函数作为参数
'''
# 导包
from pyspark import SparkConf, SparkContext
import os
os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"
# 配置conf
conf = SparkConf().setMaster("local[*]").setAppName("spark_test")
# 创建sparkContext对象
sc = SparkContext(conf=conf)

rdd = sc.parallelize([1,2,3,4,5])

def fun(data):
    return data * 10

rdd2 = rdd.map(lambda data: data * 10)
print(rdd2.collect())
# (T) -> U :要传一个参数并且有一个返回值
# (T) -> T :要传一个参数并且有一个返回值并且参数和返回值是相同类型
# 关闭spark
sc.stop()