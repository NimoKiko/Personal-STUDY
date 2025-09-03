from fastapi import APIRouter

corsAPI = APIRouter()


@corsAPI.get("/user")
async def get_user():
    return {
        "user": "current user"
    }
