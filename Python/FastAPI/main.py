from urllib import response
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from Study.study_02_example import example
from Study.study_03_路径操作装饰器方法 import routeDecrator
from Study.study_04_路径参数 import routeParams
from Study.study_05_查询参数 import queryParams
from Study.study_06_中间件 import middleComponent
from Study.study_07_CORS中间件 import corsAPI


app = FastAPI()

app.include_router(example, prefix="/example", tags=["首次示例"])
app.include_router(routeDecrator, prefix="/decrator", tags=["路径操作装饰器方法"])
app.include_router(routeParams, prefix="/pathParams", tags=["路径参数"])
app.include_router(queryParams, prefix="/queryParams", tags=["查询参数"])
app.include_router(middleComponent, prefix="/middleComponent", tags=["中间件"])
app.include_router(corsAPI, prefix="/corsAPI", tags=["CORS中间件"])

'''
中间件:
'''


@app.middleware("http")
async def m2(request: Request, call_next):

    # 请求代码块
    print("m2 request")
    response = await call_next(request)

    # 响应代码块
    print("m2 response")
    return response


@app.middleware("http")
async def m1(request: Request, call_next):

    # 请求代码块
    print("m1 request")
    if request.url.path in ["/middleComponent/user"]:
        return Response(content="visit forbidden")

    response = await call_next(request)

    # 响应代码块
    print("m1 response")

    return response


# @app.middleware("/http")
# async def CORSmiddleware(request: Request, call_next):

#     response = await call_next(request)
#     response.headers["Access-Control-Allow-Origin"] = "*"  # 解决跨域问题

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"]
)

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
