from fastapi import APIRouter

queryParams = APIRouter()


@queryParams.get("/items")
async def read_items():
    return {"msg": "This is query parameters example"}
