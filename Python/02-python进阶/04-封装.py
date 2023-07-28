'''
1.面向对象编程的三大特性:
  - 封装
  - 继承
  - 多态

2.封装
  - 将显示世界的事物，通过属性和行为进行描述，就是封装
  - 封装是一种思想

3.私有成员
  - 不公开的属性和方法
  - 私有成员分为：私有成员变量 and 私有成员方法
  - 定义私有成员的方法: 在变量名/方法名 前面加上两个下划线 __ 即可
  - 无法被类对象使用，但是可以被其他成员使用
'''
# 定义一个类，内含私有成员变量和私有成员方法


# class Phone:
#     # 私有变量：当前电压
#     __current_voltage = 0.23

#     # 私有方法：保持单核运行
#     def __keep_single_core(self):
#         print('让CPU单核运行')

#     # 公开方法：5G运行
#     def core_by_5g(self):
#         if self.__current_voltage >= 1:
#             print("5g通话已开启")
#         else:
#             print("电量不足，无法使用5g通话,并设置为单核运行进行省电")
#             self.__keep_single_core()




# phone = Phone()

# # phone.__keep_single_core()        # 报错
# # print(phone.__current_voltage)    # 报错

# phone.core_by_5g()

'''
封装案例
'''
class Phone:
    # 私有成员变量
    __is_5g_enable = None

    # 私有成员方法
    def __check_5g(self):
        
        if self.__is_5g_enable:
            print("开启5g成功")
        else:
            print("5g关闭，使用4g网络")
        
    # 公开方法
    def open_5g(self):
        self.__is_5g_enable = True
        self.__check_5g()

    def close_5g(self):
        self.__is_5g_enable = False
        self.__check_5g()

    def take_phone_call(self):
        if self.__is_5g_enable:
            print("正在使用5g通话")
        else:
            print("正在使用4g通话")
        
phone = Phone()

phone.open_5g()
phone.take_phone_call()

phone.close_5g()
phone.take_phone_call()

