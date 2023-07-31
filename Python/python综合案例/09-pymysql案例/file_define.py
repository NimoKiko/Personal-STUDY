'''
文件相关的类定义
'''
# 导入Record类
from data_define import Record
import json
# 定义一个抽象类，作为顶层设计，确定需要哪些功能


class FileReader:

    def read_data(self):
        '''
        1.读取文件的数据,将读到的每一条数据转换为Record对象
        2.封装成list对象返回
        '''
        pass

# txt文件读取类
class TextFileReader(FileReader):

    # 构造函数
    def __init__(self, path):
        # 记录文件路径
        self.path = path

    # 实现父类的方法
    def read_data(self):
        # 打开文件
        f = open(self.path, "r", encoding="utf-8")
        record_list: list[Record] = []
        for line in f.readlines():
            # 删除每一行前后的空格和回车
            line = line.strip()
            # 以逗号分隔，返回列表
            data_list = line.split(",")
            # 创建record对象
            record = Record(data_list[0], data_list[1],
                            int(data_list[2]), data_list[3])
            # 加入record_list列表中
            record_list.append(record)
        # 关闭文件
        f.close()
        return record_list

# json文件读取类
class JsonFileReader(FileReader):

    # 构造函数
    def __init__(self, path):
        # 记录文件路径
        self.path = path

    # 实现父类的方法
    def read_data(self):
        # 打开文件
        f = open(self.path, "r", encoding="utf-8")
        record_list: list[Record] = []
        for line in f.readlines():
            # 将json转化为字典格式
            dict_data = json.loads(line)
            # 创建Record类
            record = Record(dict_data["date"], dict_data["order_id"],
                            int(dict_data["money"]), dict_data["province"])
            # 将record对象加入record列表
            record_list.append(record)
        # 关闭文件
        f.close()
        return record_list


# 测试方法
if __name__ == '__main__':
    txt_f = TextFileReader(
        "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/面向对象案例数据/2011年1月销售数据.txt")
    txt_f.read_data()

    json_f = JsonFileReader(
        "C:/Users/quyixing/Desktop/mine/Python/python综合案例/数据资料/面向对象案例数据/2011年2月销售数据JSON.txt")
    res = json_f.read_data()

    for l in res:
        print(l)
