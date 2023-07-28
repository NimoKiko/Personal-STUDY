'''
1.导入map
  - from pyecharts import Map
  - from pyecharts import options as opts
'''
from pyecharts.charts import Map
from pyecharts import options as opts
import json

# # 初始化map
# map = Map()

# data = [
#     ("北京市",7),
#     ("上海市",19),
#     ("广东省",85),
#     ("深圳市",120),
#     ("吉林省",300)
# ]
# # 添加数据
# map.add("中国地图",data)
# # 设置全局选项
# map.set_global_opts(
#     visualmap_opts=opts.VisualMapOpts(
#         is_show=True,
#         is_piecewise=True,
#         pieces=[
#             {"min":1,"max":9,"label":"1-9","color":"#CCFFFF"},
#             {"min":10,"max":99,"label":"10-99","color":"#FFFF99"},
#             {"min":100,"max":999,"label":"100-999","color":"#FF9966"}
#         ]
#     )
# )

'''
综合案例:全国疫情地图构建案例
'''
# 初始化地图
map = Map()
# 处理数据
# 打开文件
file = open("C:/Users/quyixing/Desktop/mine/Python/python综合案例/可视化案例数据/地图数据/疫情.txt",
            "r", encoding="utf-8")
# 读取全部数据
cn_data = file.read()
# 将json格式转化为可操作的字典格式
cn_data_dict = json.loads(cn_data)
# 获取省份和对应数据
province_data_list = cn_data_dict["areaTree"][0]["children"]
# 获取各个省份的名称和确诊人数
data = []
for item in province_data_list:
    province_name = item["name"]
    province_confirm = item["total"]["confirm"]

    if (
        province_name == "上海" or
        province_name == "北京" or
        province_name == "重庆" or
        province_name == "天津"
    ):
        province_name += "市"
    elif (province_name == "广西"):
        province_name += "壮族自治区"
    elif (province_name == "西藏" or province_name == "内蒙古"):
        province_name += "自治区"
    elif (province_name == "宁夏"):
        province_name += "回族自治区"
    elif (province_name == "新疆"):
        province_name += "维吾尔自治区"
    else:
        province_name += "省"

    data.append((province_name, province_confirm))

map.add("中国疫情分布统计图", data)

map.set_global_opts(
    visualmap_opts=opts.VisualMapOpts(
        is_show=True,
        is_piecewise=True,
        pieces=[
            {"min":1,"max":99,"label":"1~99人","color":"#ccffff"},
            {"min":100,"max":999,"label":"100~990人","color":"#ffff99"},
            {"min":1000,"max":4999,"label":"1000~4999人","color":"#ff9966"},
            {"min":5000,"max":9999,"label":"5000~9999人","color":"#ff6666"},
            {"min":10000,"max":99999,"label":"10000~99999人","color":"#cc3333"},
            {"min":100000,"label":"100000以上","color":"#990033"},
        ]
    )
)

# 绘制地图
map.render("04-地图可视化.html")
