from fastapi import APIRouter

example = APIRouter()

# restful API设计风格
# 对于数据资源分别使用POST, GET, PUT, DELETE等请求动作来表示对数据的增删改查
@example.get("/")
async def home():
    
    return {"user_id": 1001}

