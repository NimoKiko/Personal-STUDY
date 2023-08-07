'''
1.socket
  - 创建socket对象
  - 绑定socket_server到指定IP和地址
  - 服务端开始监听端口
  - 接受客户端连接，获得连接对象
'''
# 导包
import socket
# 创建socket对象
socket_server = socket.socket()
# 绑定IP地址
socket_server.bind((
    "localhost",
    8888
))
# 监听端口
# listen()接受一个整数参数，表示接受的连接数量
socket_server.listen(1)
# 等待客户端的连接
# result = socket_server.accept()
# conn = result[0]        # 客户端和服务端的连接对象
# address = result[1]     # 客户端的地址信息
# 简化形式
conn, address = socket_server.accept()
# accept()是阻塞方法，如果没有链接就会一直等待
print(f'接收到了连接，客户端的信息是：{address}')
while True:
  # 接受客户端信息
  data = conn.recv(1024).decode("UTF-8")
  # recv()接收的参数是缓冲区大小，一般1024即可
  # recv()方法的返回值是一个字节数组(bytes对象),通过decode方法转化为UTF-8编码
  print(f'客户端发来的信息是{data}')
  # 发送回复的消息
  msg = input("请输入您要回复的消息:").encode("utf-8")
  if msg == "exit":
    break
  conn.send(msg)

# 关闭连接
conn.close()
socket_server.close()