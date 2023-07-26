'''
动态时间线柱状图绘制
'''
from pyecharts.charts import Timeline, Bar
from pyecharts import options as opts

file = open("C:/Users/quyixing/Desktop/mine/Python/python综合案例/可视化案例数据/动态柱状图数据/1960-2019全球GDP数据.csv",
            "r", encoding="GB2312")
# 读取每一行数据
data_lines = file.readlines()
# 关闭文件
file.close()
# 删除第一条数据
data_lines.pop(0)
# 将列表数据转化为字典类型数据
data_dict = {}
for line in data_lines:
    year = int(line.split(",")[0])
    country = line.split(",")[1]
    GDP = float(line.split(",")[2])
    # 判断字典中是否存在指定的key
    try:
        data_dict[year].append([country, GDP])
    except KeyError:
        # 创建一个key
        data_dict[year] = []
        data_dict[year].append([country, GDP])

# print(data_dict)
# 创建时间线对象
timeline = Timeline()
# 排序年份
sorted_year_list = sorted(data_dict.keys())
# 循环遍历排序好的年份
for year in sorted_year_list:
    # 使用sort() + 匿名函数的方式指定根据哪个key进行排序
    data_dict[year].sort(key=lambda element: element[1], reverse=True)
    # 取出本年份前8的国家(切片的方式)
    year_data = data_dict[year][0:8]
    year_data = year_data[::-1]
    x_data = []
    y_data = []
    for item in year_data:
        x_data.append(item[0])  # x轴添加国家
        y_data.append(item[1] / 100000000)  # y轴添加GDP
    # 创建柱状图
    bar = Bar()
    bar.add_xaxis(x_data)
    bar.add_yaxis("GDP(亿)", y_data, label_opts=opts.LabelOpts(
        position="right"
    ))
    # 反转x,y轴
    bar.reversal_axis()
    bar.set_global_opts(
        title_opts=opts.TitleOpts(
            title=f"{year}年全球前 8 GDP国家",
            pos_top="1%",
            pos_left="10%"
        )
    )

    timeline.add(bar, str(year))

timeline.add_schema(
    play_interval=1000,
    is_timeline_show=True,
    is_auto_play=True,
    is_loop_play=False,
)


timeline.render("07-动态绘制时间线柱状图案例.html")
