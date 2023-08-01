'''
1.distinct()
  - 对rdd数据进行去重
  - rdd.distinct()
'''
from pyspark import SparkConf, SparkContext
import os

os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_test")

sc = SparkContext(conf=conf)

param = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]

rdd = sc.parallelize(param)

res = rdd.distinct()

print(res.collect())

# 关闭spark
sc.stop()
