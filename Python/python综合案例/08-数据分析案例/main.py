'''
使用面向对象的思想

1.读取数据
  - 设计fileReader类

2.封装数据
  - 设计数据封装类

3.计算数据对象
  - 对对象进行逻辑计算

4.pyecharts绘图
  - 以面向对象的思想重新认识pyecharts
'''
from data_define import Record
from file_define import *
from pyecharts.charts import Bar
from pyecharts import options as opts

txt_f = TextFileReader(
    "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/面向对象案例数据/2011年1月销售数据.txt")

json_f = JsonFileReader(
    "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/面向对象案例数据/2011年2月销售数据JSON.txt")

jan_data: list[Record] = txt_f.read_data()

feb_data: list[Record] = json_f.read_data()

# 将两个月份的数据合并成一个list
all_data_list: list[Record] = jan_data + feb_data

# 进行数据计算
# {"2011-01-01": 1234}
data_dict: dict = {}
for item in all_data_list:
    # print(item.money)
    if item.date in data_dict.keys():
        # 当前日期已经有记录，做累加即可
        data_dict[item.date] += item.money
    else:
        # 日期未被记录，在字典中新加这一项
        data_dict[item.date] = item.money

# print(data_dict)

data_x: list = []   # x轴数据
data_y: list = []   # y轴数据

for index in data_dict.keys():
    data_x.append(index)
    data_y.append(data_dict[index])

bar = Bar()

bar.add_xaxis(data_x)

bar.add_yaxis("销售额",data_y,label_opts=opts.LabelOpts(
    is_show=False
))

bar.set_global_opts(
    datazoom_opts=opts.DataZoomOpts(
        is_show=True
    ),
    title_opts=opts.TitleOpts(
        title="2011年1、2月 日销售额(元)",
        pos_left="center"
    ),
    legend_opts=opts.LegendOpts(
        pos_right="20%"
    )
)

bar.render("08-数据分析案例.html")

