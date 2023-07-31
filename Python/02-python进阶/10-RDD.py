'''
1.RDD: 弹性分布式数据集

2.可以通过sc.textFile()方法获取文本文件的内容并转成RDD对象

3.可以通过sc.parallelize()方法将python数据容器转化为RDD对象
'''
# 导包
from pyspark import SparkConf, SparkContext
# 配置conf
conf = SparkConf().setMaster("local[*]").setAppName("spark_test")
# 创建sparkContext对象
sc = SparkContext(conf=conf)

rdd = sc.parallelize([1,2,3,4,5])

# 查看rdd中有什么内容需要使用collect()方法
print(rdd.collect())



sc.stop()