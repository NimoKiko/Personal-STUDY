'''
综合案例:绘制省级疫情地图
'''
from pyecharts.charts import Map
from pyecharts import options as opts
import json

file = open("C:/Users/quyixing/Desktop/mine/Python/python综合案例/可视化案例数据/地图数据/疫情.txt",
            "r", encoding="utf-8")
# 读取文件的全部数据
file_data = file.read()
# 将json格式转化为可操作的格式
file_data_operatable = json.loads(file_data)
# 处理数据
HuBei_data = file_data_operatable["areaTree"][0]["children"][6]["children"]

data = []

for item in HuBei_data:
    name = item["name"]
    confirm = item["total"]["confirm"]
    # 市名处理
    if (name == "恩施州"):
        name = "恩施土家族苗族自治州"
    elif (name == "神农架"):
        name += "林区"
    else:
        name += "市"
    data.append((name, confirm))
print(data)
# 初始化地图
map = Map()
# 添加数据
map.add("湖北省疫情统计情况", data, "湖北")
# 设置地图样式
map.set_global_opts(
    visualmap_opts=opts.VisualMapOpts(
        is_show=True,
        is_piecewise=True,
        pieces=[
            {"min": 1, "max": 99, "label": "1~99人", "color": "#ccffff"},
            {"min": 100, "max": 299, "label": "100~299人", "color": "#ffff99"},
            {"min": 300, "max": 599, "label": "300~599人", "color": "#ff9966"},
            {"min": 600, "max": 999, "label": "600~999人", "color": "#ff6666"},
            {"min": 1000, "max": 4999, "label": "1000~4999人", "color": "#cc3333"},
            {"min": 4999, "label": "5000以上", "color": "#990033"},
        ]
    )
)
# 加载地图
map.render("05-省级地图绘制.html")
