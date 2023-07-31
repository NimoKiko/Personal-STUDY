'''
1.flatMap():
  - 对rdd进行map操作，然后进行解除嵌套操作
'''
from pyspark import SparkConf,SparkContext
import os
os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_rest")

sc = SparkContext(conf=conf)

rdd = sc.parallelize(["a b c","d e f","g h i"])

print(rdd.map(lambda x: x.split(" ")).collect())

print(rdd.flatMap(lambda x: x.split(" ")).collect())

# rdd3 = rdd.flatMap(lambda x: x.split(" "))

# print(rdd3.collect())

sc.stop()