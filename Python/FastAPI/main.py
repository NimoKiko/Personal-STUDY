from fastapi import FastAPI
import uvicorn

from Study.study_02_example import example
from Study.study_03_路径操作装饰器方法 import routeDecrator
from Study.study_04_路径参数 import routeParams
from Study.study_05_查询参数 import queryParams


app = FastAPI()

app.include_router(example, prefix="/example", tags=["首次示例"])
app.include_router(routeDecrator, prefix="/decrator", tags=["路径操作装饰器方法"])
app.include_router(routeParams, prefix="/routeParams", tags=["路径参数"])
app.include_router(queryParams, prefix="/queryParams", tags=["查询参数"])


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
