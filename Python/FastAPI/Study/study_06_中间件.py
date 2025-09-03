from fastapi import APIRouter

middleComponent = APIRouter()


@middleComponent.get("/user")
async def get_user():

    print("get_user函数执行")

    return {
        "user": "current user"
    }


@middleComponent.get("/item/{item_id}")
async def get_item(item_id: int):

    print("get_item函数执行")
    return {
        "item_id": item_id
    }
