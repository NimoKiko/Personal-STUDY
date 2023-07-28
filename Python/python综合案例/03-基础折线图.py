'''
1.pyecharts-基础折线图
  - 导入包
'''
# 导入折线图的包
from pyecharts.charts import Line
from pyecharts import options as opts
# 创建折线图对象
line = Line()
# 添加x轴数据
line.add_xaxis(["云南", "川西", "雅鲁藏布江"])
# 添加y轴数据
line.add_yaxis("人流量", [12000, 10000, 4000])
# 全局配置项
line.set_global_opts(
    title_opts=opts.TitleOpts(
        title="2023中国部分地区人流量分布图",
        pos_left="center",
        pos_bottom="1%"
    ),
    legend_opts=opts.LegendOpts(
        is_show= True
    )
)


# 生成图表
line.render("03-基础折线图.html")
