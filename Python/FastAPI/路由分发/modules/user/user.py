from fastapi import APIRouter

user = APIRouter()

@user.get("/get_user")
def get_user():
  return {"user_id": 1001}

@user.post("/add_user")
def add_user():
  return {"msg": "add user success!"}