from fastapi import APIRouter, Query, Body, Path
from pydantic import BaseModel, Field
from typing import Annotated

queryParams = APIRouter()

# 使用Field可以在模型中做额外校验
class Item(BaseModel):
    ID: int = Field(title="产品ID", description="产品的唯一标识符", ge=1)
    name: str = Field(title="产品名称", description="产品名称", max_length=20)
    price: float = Field(title="产品价格", description="产品价格", gt=0)
    description: str = Field(default=None,title="产品描述", description="产品描述信息", max_length=300
    )
    
class User(BaseModel):
    ID: int = Field(title="用户ID", description="用户唯一的标识", ge=1)
    username: str = Field(title="用户名", description="用户昵称", max_length=20)
    realname: str | None


fake_data = [
    {"item_id": "1001", "name": "衣服"},
    {"item_id": "1002", "name": "裤子"},
    {"item_id": "1003", "name": "鞋子"},
]


# 在路径操作函数中声明的参数可以设置默认值
@queryParams.get("/setDefaultParams", description="设置默认值")
async def read_items(skip: int = 0, limit: int = 10):

    return fake_data[skip : skip + limit]


# 可选参数
# 使用 | None = None 来声明的参数是可选的
# 如果参数值没有传入，则使用 None 作为默认值
# 如果不声明默认值，也不把默认值设为None，则该参数为必传参数
@queryParams.get("/choosableParams", description="可选参数和必选参数")
async def read_items_2(q: str | None = None):
    if q:
        return "查询的结果为:{}".format(q)

    return "find nothing"


# 参数自动转换
# 布尔类型的参数，诸如on, yes, true, 1,之类的都可以转化为true，反之亦然
@queryParams.get("/transformParams", description="参数自动转换")
async def read_items_3(flag: bool = False):
    if not flag:
        return flag


# 使用Query类 做额外校验
@queryParams.get("/extraCheck", description="使用Query做额外校验")
async def read_items_4(params: str | None = Query(default=None, min_length=3)):
    if not params:
        return "参数为空"
    return params


# 查询参数模型
# 使用Annotated 来声明查询参数模型
# 使用Query() 可以帮助文档生成器识别该模型，有助于API文档可读性
@queryParams.post("/queryModel", description="查询参数模型")
async def query_model(item: Item):
# async def query_model(item: Item = Query(),):
    return item

# 混合多种参数类型
@queryParams.post("/bodyParams/{item_id}", description="请求体参数")
async def body_params(item_id:int = Path(...,ge=0), user_id: str = Query(...), item: Item = Body(...), count:int = Query(None)):
    return {
        "item_id": item_id,
        "user_id": user_id,
        "item": item,
        "count": count
    }

'''
总结：
参数大致有三种类型：
 - 路径参数: 就是写在URL中的参数, 例如 /items/{item_id} 中用花括号包裹的内容。
    - 可以使用Path() 来做额外的校验
 - 查询参数: URL中 ? 后面的参数, 例如 /items?skips=0&limit=10中?后面的内容
    - 可以使用Query() 来做额外的校验
 - 请求体参数: 通过请求体来传递参数,一般是JSON格式
    - 可以使用Body() 来标识
    - 使用Pydantic模型来定义的类可以用来规定请求体的结构和数据类型,这种一般就是请求体参数
    - 在Pydantic模型中可以使用Field() 来做做额外的校验, Field() 只能在Pydantic模型中使用且引入自Pydantic类

注意: get请求一般不携带请求体参数, post/put/pathc 请求一般可以携带请求体参数。
'''

