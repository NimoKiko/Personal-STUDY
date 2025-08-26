from fastapi import FastAPI
import uvicorn

from modules.user.user import user
from modules.shop.shop import shop

app = FastAPI()

app.include_router(user, prefix="/user",tags=["用户模块"])
app.include_router(shop, prefix="/shop",tags=["商店模块"])


if __name__ == "__main__":
  
  uvicorn.run("main:app", port=8080, reload=True)