'''
数据定义的类
'''


class Record:
    
    # 构造函数
    def __init__(self, date, order_id, money, province):
        # 订单日期
        self.date = date
        # 订单id
        self.order_id = order_id
        # 订单金额
        self.money = money
        # 订单省份
        self.province = province

    # 字符串方法
    def __str__(self):
        return f"{self.date}, {self.order_id}, {self.money}, {self.province}"
