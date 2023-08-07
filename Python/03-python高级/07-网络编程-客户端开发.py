'''
1.socket客户端开发
  - 创建socket对象
  - 连接到服务器
  - 发送消息
'''
import socket
# 创建socket对象
socket_client = socket.socket()
# 连接到服务端
socket_client.connect((
    'localhost',
    8888
))
# 发送消息
socket_client.send('你好呀').encode('utf-8')
# 接收消息
data = socket_client.recv(1024).decode('uft-8')
print(f'服务端回复的消息是：{data}')
# 关闭连接
socket_client.close()