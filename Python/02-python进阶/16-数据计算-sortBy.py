'''
1.sortBy()
  - 对rdd数据进行排序
  - rdd.sortBy(func, ascending, numPartitions)
  - func(T) -> U, 告知按照rdd中哪个数据进行排序
  - ascending: True表示升序 False表示降序
  - numpartitions: 用多少分区排序
'''
from pyspark import SparkConf, SparkContext
import os

os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_test")

sc = SparkContext(conf=conf)

param = [
    ('a',11,'你好'),
    ('a',13,'你好'),
    ('a',32,'你好'),
    ('a',43,'你好'),
    ('a',675,'你好'),
    ('a',1123,'你好'),
]

rdd = sc.parallelize(param)

res = rdd.sortBy(lambda x: x[1], ascending=False,numPartitions=1)

print(res.collect())

# 关闭spark
sc.stop()
