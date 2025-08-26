from fastapi import APIRouter

shop = APIRouter()

@shop.get("/get_order")
def get_order():
  return {"order_id": 1001}

@shop.post("/add_goods")
def add_goods():
  return {"msg": "add goods success!"}