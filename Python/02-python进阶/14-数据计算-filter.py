'''
1.filter()
  - 对rdd数据进行过滤，保留需要的数据
  - rdd.filter(func)
  - func: (T) -> bool
  - 传入一个参数，返回一个布尔类型
'''
from pyspark import SparkConf, SparkContext
import os

os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_test")

sc = SparkContext(conf=conf)

param = [1,2,3,4,5,6,7,8,9,10]

rdd = sc.parallelize(param)

res = rdd.filter(lambda x: x % 2 == 0)

print(res.collect())

# 关闭spark
sc.stop()
