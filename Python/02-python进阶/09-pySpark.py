'''
1.spark: f分布式计算框架，用于调度成百上千的服务器集群，计算TB,PB,EB级别的海量数据

2.PySpark: 由Spark官方开发的Python语言第三方库

3.安装: pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pyspark

4.pyspark执行环境的入口对象是: 类SparkContext的类对象
'''
from pyspark import SparkConf, SparkContext
# import os
# # 指定环境变量
# os.environ['JAVA_HOME'] = "C:\Program Files\Java\jdk1.8.0_311"

# 创建SparkConf类对象
conf = SparkConf().setMaster("local[*]").setAppName("test_spark_app")
# 基于SparkConf创建SparkContext对象
sc = SparkContext(conf=conf)

# 打印pyspark运行版本
print(sc.version)

sc.stop()