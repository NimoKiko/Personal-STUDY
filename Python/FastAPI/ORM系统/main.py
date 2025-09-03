from fastapi import FastAPI
import uvicorn

# 这是一个注册函数
from tortoise.contrib.fastapi import register_tortoise
# 导入配置
from settings import TORTOISE_ORM
# 导入API
from api.student import student

app = FastAPI()

app.include_router(student,prefix="/student",tags=["学生API"])


# fastapi一旦运行，注册就运行了，实现监控
register_tortoise(
  app = app,
  config = TORTOISE_ORM
)


# 入口函数
if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
