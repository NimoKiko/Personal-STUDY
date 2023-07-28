'''
绘制基础柱状图
'''
from pyecharts.charts import Bar
from pyecharts import options as opts

bar = Bar()

bar.add_xaxis(["韩烨","温客行","林眠"])

bar.add_yaxis("人气1",[895,1080,476],label_opts=opts.LabelOpts(
    position="right"
))
bar.add_yaxis("人气2",[230,700,100])

bar.set_global_opts(
    title_opts=opts.TitleOpts(
        title="Simon角色人气大赏",
        pos_bottom="1%",
        pos_left="center"
    ),
    
)

# 反转x, y轴
bar.reversal_axis()

bar.render("06-基础柱状图.html")