# HTTP协议

## 1 http协议
1. 什么是请求头，请求体，响应头，响应体
2. URL地址包括什么
3. GET请求和POST请求是什么
4. Content-Type是什么

## 1.1 http协议特性

1. 基于TCP/IP协议

2. 基于请求-响应模式

- 请求从客户端发出，最后服务器端响应请求并返回。

3. 无状态保存

4. 短链接



# 一些命令
```bash
uvicorn main:app --reload # 使用命令启动服务

pip install -r requirements.txt # 安装依赖

pip freeze > requirements.txt # 生成依赖汇总文件
```

# ORM 系统
1. 安装tortoise及相关依赖
```bash
pip install tortoise-orm

pip install aiomysql # Tortoise-ORM 在使用 MySQL 时需要这个模块作为依赖。

pip install aerich # aerich 是一个 Tortoise-ORM 的数据库迁移工具，通常在开发环境中使用。
```
2. tortoise 配置文件
```py
# 数据库配置
TORTOISE_ORM = {
    "connections": {
        # 定义数据库连接，使用MySQL为例
        "mysql": {
            "engine": "tortoise.backends.mysql",
            "credentials": {
                "host": "localhost",
                "port": 3306,
                "user": "root",
                "password": "root",
                "database": "fastapi",
                "charset": "utf8mb4",
            }
        },
    },
    "apps": {
        # 定义应用模型，这里假设你的模型在`models`模块中
        "models": {
            "models": ["models", "aerich.models"],  # 如果有使用aerich进行迁移，需要包含 "aerich.models"
            "default_connection": "mysql",  # 默认使用的数据库连接
        },
    },
}

```
3. 初始化配置
```bash
# 初始化配置只需要使用一次
aerich init -t settings.TORTOISE_ORM

# 初始化数据库，真正迁移表的命令
aerich init-db

# 修改了模型之后需要重新迁移, 这一步会生成一个语句文件, 并没有直接将数据库的表修改
aerich migrate --name 行为 # --name这部分可以不加

# 执行upgrade可以更新表，如果执行downgrade可以将表回溯
aerich upgrade
aerich downgrade

```

# Restful 规范

- 通过请求方式甄别请求的逻辑

```python
@api.get("/students") # 查看 所有学生

@api.get("students/1") # 查看 ID=1 的学生

@api.post("/students") # 添加 学生

@api.put("/students") # 编辑/更新 学生
@api.put("/students/1") # 编辑/更新 ID=1 学生

@api.delete("/studnets") # 删除 学生
@api.delete("/studnets/1") # 删除 ID=1 学生

```