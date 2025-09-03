from os import name
from typing import List
from fastapi import APIRouter
from pydantic import BaseModel, field_validator
# 引入Model
from models import *
from fastapi.exceptions import HTTPException

student = APIRouter()


@student.get("/")
async def getAllStudnet():
    # 1. 查询所有
    # students = await Student.all() # [Student(),Student(),Student()]

    # studentList = []

    # for item in students:
    #   temp = {
    #     "name": item.name,
    #     "sno": item.sno
    #   }
    #   studentList.append(temp)

    # return studentList
    '''
    2. 模糊查询
      - __gt: 筛选大于
      - __lt: 筛选小于
      - __ge: 筛选大于等于
      - __le: 筛选小于等于
      - __range: 筛选一个范围内
      - __in: 筛选在[]中即可
    '''
    # stu = await Student.filter(sno__gt=2001)
    # for item in stu:
    #   return item

    '''
  3. values查询
    - 仅获取条件字段
  '''
    # stu = await Student.all().values("name","sno")
    # return stu

    # 4. 一对多查询
    # 使用get()获取指定的数据
    rain = await Student.get(name='rain')
    # 可以使用创建的 Model 中 一对多关系的字段来进行一对多查询
    print(await rain.clas.values("name"))

    # students = await Student.all().values("name","clas__name")

    # 5. 多对多查询
    # 这一步可以查询到学生rain所关联的所有的 Course -> 这个结果是基于 Course 这个 Model
    print(await rain.courses.all())
    # 在 Course 模型的基础上通过values()可以查询指定的字段
    print(await rain.courses.all().values("name"))
    # 通过 __字段名 的方式可以查询 外键关联的信息
    print(await rain.courses.all().values("name", "teacher__name"))

    students = await Student.all().values("name", "clas__name", "courses__name")

    return students


@student.get("/{ID}")
async def getStudentByID(ID: int):

    # 过滤查询
    # 使用filter()
    # stu = await Student.filter(id=ID)

    # if stu:
    #   return stu[0]
    # else:
    #   return "查无此人"

    # 确定只有一个返回值的
    # 使用 get()
    stu = await Student.get_or_none(id=ID)
    print(stu)
    if stu:
        return stu
    else:
        return "查无此人"


class StudentIn(BaseModel):
    name: str
    pwd: str
    sno: int
    clas_id: int
    course: List[int] = []

    @field_validator("name")
    def name_must_alpha(cls, value):
        if not value.isalpha():
            raise ValueError("name must be alpha")
        return value


@student.post("/")
async def addStudent(student_in: StudentIn):

    # 插入到数据库
    # 方法 1
    # stu = Student(name=student_in.name, pwd=student_in.pwd, sno=student_in.sno, clas_id=student_in.clas_id)
    # await stu.save()

    # 方法 2 推荐
    # create()
    stu = await Student.create(name=student_in.name, pwd=student_in.pwd, sno=student_in.sno, clas_id=student_in.clas_id)

    # 多对多关系绑定
    chooses_courses = await Course.filter(id__in=student_in.course)
    # 清除所有关系
    # await stu.courses.clear()
    await stu.courses.add(*chooses_courses)

    return stu


@student.put("/{ID}")
async def updateStudentByID(ID: int, student_in: StudentIn):

    data = student_in.model_dump()
    print(data)
    # 其中 course 这个字段由于是多对多的字段，无法直接更新，需要先将其从字典中删除
    # 使用字典对象的pop()方法将course这个多对多字段取出
    courses = data.pop("course")
    # 使用update()更新普通字段
    await Student.filter(id=ID).update(**data)

    # 更新多对多课程
    # 使用get()找到指定的学生
    editing_stu = await Student.get(id=ID)
    # 根据从前端传来的course字段，从Course表中找到所包含的课程
    new_courses = await Course.filter(id__in=courses)
    # 清除 student_course 这张关系表中 正在编辑的这位学生的课程信息
    await editing_stu.courses.clear()
    # 重新添加 新的课程信息
    await editing_stu.courses.add(*new_courses)

    return {
        "操作": f"更新ID为{ID}的学生"
    }


@student.delete("/{ID}")
async def deleteStudentByID(ID: int):

    deleteCount = await Student.filter(id=ID).delete()

    if not deleteCount:
        raise HTTPException(status_code=404, detail=f"主键为{ID}的学生不存在")

    return {
        "操作": f"删除ID为{ID}的学生"
    }
