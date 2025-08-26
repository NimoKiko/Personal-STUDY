from fastapi import APIRouter
from enum import Enum


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


routeParams = APIRouter()


# 以如下方式可以定义路径参数
@routeParams.get("/items/{item_id}")
async def read_item(item_id: int):  # 可以为路径参数规定数据类型
    print("item_id:", item_id)
    return {"item_id": item_id}


# 使用枚举类型来规定路径参数
@routeParams.get("/model/{model_name}")
async def get_model(model_name: ModelName) -> dict:
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "msg": "choose alexnet"}

    if model_name == "lenet":
        return {"model_name": model_name, "msg": "choose lenet"}

    return {"model_name": model_name, "msg": "Have some residuals"}


# 路径参数中包含路径的方法
@routeParams.get("/files/{file_path:path}")
async def get_file(file_path: str):
    return {"file_path": file_path}


