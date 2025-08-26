from fastapi import APIRouter
import uvicorn

routeDecrator = APIRouter()

# restful API设计风格
# 对于数据资源分别使用POST, GET, PUT, DELETE等请求动作来表示对数据的增删改查

# 参数说明
# tag：给接口分组
# summary: 接口简要说明
# description: 接口详细说明
# response_description: 响应结果说明
# deprecated: 是否废弃该接口

@routeDecrator.get("/get",tags=["GET请求"])
def get_test():
  return {"method": "get方法"}

@routeDecrator.post("/post")
def post_test():
  return {"method": "post方法"}

@routeDecrator.put("/put")
def put_test():
  return {"method": "put方法"}

@routeDecrator.delete("/delete")
def delete_test():
  return {"method": "delete方法"}
