'''
1.reduceKey()
  - 针对KV型RDD,自动按照key分组,根据你的聚合逻辑,完成组内数据的聚合操作
  - rdd.reduceKey(func)
  - func(V,V) -> V
  - 接受两个传入参数(类型一致),返回一个和传入参数相同类型的值
'''
from pyspark import SparkConf, SparkContext
import os

os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_test")

sc = SparkContext(conf=conf)

param = [('a',1),('a',2),('b',3),('b',5),('c',2),('c',3)]

rdd = sc.parallelize(param)

res = rdd.reduceByKey(lambda x, y: x + y)

print(res.collect())

# 关闭spark
sc.stop()