'''
1.继承:
  - 单继承语法：
    class 类名(父类名):
        类内容
  - 多继承语法:
    class 类名(父类1, 父类2, 父类3, ...):
        类内容
  - pass: 如果没有其他代码，为了避免报错，可以使用pass
  - 多个父类中重复的属性，以最先继承的为准(最靠左)
'''
# 父类
# class Phone:
#     producer = "Apple"
#     # 私有成员变量
#     __is_5g_enable = False

#     # 私有成员方法
#     def __check_5g(self):
        
#         if self.__is_5g_enable:
#             print("开启5g成功")
#         else:
#             print("5g关闭，使用4g网络")
        
#     # 公开方法
#     def open_5g(self):
#         self.__is_5g_enable = True
#         self.__check_5g()

#     def close_5g(self):
#         self.__is_5g_enable = False
#         self.__check_5g()

#     def take_phone_call(self):
#         if self.__is_5g_enable:
#             print("正在使用5g通话")
#         else:
#             print("正在使用4g通话")

# class Camera:
#     producer = "Conna"

#     def take_photo(self):
#         print("拍了一张照片")
    
#     def check_next_photo(self):
#         print("翻看下一张照片")

#     def check_previous_photo(self):
#         print("翻看下一张照片")

# class Phone2023(Phone, Camera):
#     face_id = "230727"

#     def identify_by_faceId(self):
#         print("使用面部识别")

# phone = Phone2023()

# phone.open_5g()
# phone.take_phone_call()
# phone.identify_by_faceId()
# phone.take_photo()
# phone.check_next_photo()
# phone.check_previous_photo()

'''
2.复写父类
  - 子类中重新定义和父类中重名的属性和方法
  - 直接在子类中重新定义即可复写
  - 只能修改公开成员，私有成员无法被其他类调用或修改

3.子类中调用父类的成员
  - 方法一:
    - 使用成员变量: 父类名.成员变量
    - 使用成员方法: 父类名.成员方法(self)
  - 方法二：
    - 使用成员变量: super().成员变量
    - 使用成员方法: super().成员方法()
  - 子类只能调用父类中的公开变量和公开方法
'''
# 父类
class Phone:
    producer = "Apple"
    # 私有成员变量
    __is_5g_enable = False

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
    
    def check_5g(self):
        if self.__is_5g_enable:
            return True
        else:
            return False   

    def tips(self):
        print("这是手机类")

class Camera:
    producer = "Conna"

    def take_photo(self):
        print("拍了一张照片")
    
    def check_next_photo(self):
        print("翻看下一张照片")

    def check_previous_photo(self):
        print("翻看下一张照片")

class Phone2023(Phone, Camera):
    face_id = "230727"

    def identify_by_faceId(self):
        if super().check_5g():
            print("使用面部识别")
        else:
            print("请打开5g以使用面部识别")
        

    def tips(self):
        print("这是2023的手机类")

phone = Phone2023()
phone.identify_by_faceId()
phone.open_5g()
phone.identify_by_faceId()
