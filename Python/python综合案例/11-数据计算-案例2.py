from pyspark import SparkConf, SparkContext
import os
import json

os.environ['PYSPARK_PYTHON'] = "D:/Technology/Tools/Python/InstallPath/python.exe"

conf = SparkConf().setMaster("local[*]").setAppName("spark_test")

sc = SparkContext(conf=conf)
# 读取文件
file_rdd = sc.textFile(
    "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/数据计算数据/orders.txt")
# 获取一个个json字符串
json_str_rdd = file_rdd.flatMap(lambda x: x.split("|"))
# 将json字符串转化为字典
dict_rdd = json_str_rdd.map(lambda x: json.loads(x))
# TODO1: 计算城市销售额排行
# 1.取出城市和销售额数据
city_money_rdd = dict_rdd.map(lambda x: (x["areaName"], int(x["money"])))
# 2.按城市分组，按销售聚合
city_money_rank_rdd = city_money_rdd.reduceByKey(lambda x, y: x + y)
# 3.降序排序
city_money_rank_rdd = city_money_rank_rdd.sortBy(
    lambda item: item[1], ascending=False, numPartitions=1)

# TODO2: 全部城市有哪些商品在卖
# 1.获取全部商品
good_rdd = dict_rdd.flatMap(lambda x: [x["category"]])
# 2.去重
good_rdd = good_rdd.distinct()

# TODO3: 北京市有哪些商品在卖
# 获取北京的商品
beijing_goods_rdd = dict_rdd.filter(lambda x: x['areaName'] == '北京')
# 过滤出北京的商品并去重
beijing_goods_rdd = beijing_goods_rdd.flatMap(lambda x: [x["category"]]).distinct()


print(beijing_goods_rdd.collect())

# 停止spark
sc.stop()
