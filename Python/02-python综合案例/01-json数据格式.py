'''
1.JSON: 轻量级数据交互格式

2.将列表转换为JSON
  - json.dumps(data)

3.将JSON数据转换为对应格式
  - json.loads(JSONStr)
'''
import json

data = [
    {
        "name": "lisa",
        "age": 18
    },
    {
        "name": "owen",
        "age": 20
    },
    {
        "name": "henry",
        "age": 15
    },
    {
        "name": "fiona",
        "age": 22
    },
    {
        "name": "李雷",
        "age": 22
    },
]
# ensure_ascii表示是否通过ASCII码转换
jsonStr = json.dumps(data,ensure_ascii=False)
print(type(jsonStr),jsonStr)

print("-----------------------------------------------")
s = json.loads(jsonStr)
print(type(s),s)
