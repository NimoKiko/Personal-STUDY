'''
创建数据库模型, 继承Model类的class将会和数据库中的表进行映射

'''
from tortoise.models import Model
from tortoise import fields

# 学生类


class Student(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description="姓名")
    pwd = fields.CharField(max_length=32, description="密码")
    sno = fields.IntField(description="学号")

    # 一对多的关系
    clas = fields.ForeignKeyField("models.Clas", related_name="students")

    # 多对多的关系
    courses = fields.ManyToManyField("models.Course", related_name='students')

# 班级类


class Clas(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description="班级名称")
    teacher = fields.ForeignKeyField("models.Teacher")

# 课程类


class Course(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description="课程名称")
    teacher = fields.ForeignKeyField("models.Teacher")
    addr = fields.CharField(max_length=32, description="教室号", default="")


# 教师类
class Teacher(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description="教师名称")
    pwd = fields.CharField(max_length=32, description="密码")
    tno = fields.IntField(description="教师编号")
