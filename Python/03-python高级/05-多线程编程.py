'''
1.通过使用threading模块来实现
  - thread_obj = threading.Thread([group [ , target[, name[, args[, kwarges]]]]])
    - group: 暂时无用，未来功能的预留参数
    - target: 执行的目标任务名
    - args: 以元组的方式给执行任务传参
    - kwargs: 以字典方式给执行任务传参
    - name: 线程名
'''
import threading
import time


def sing():
    i = 0
    while i < 5:
        print("im singing.....")
        time.sleep(1)
        i += 1


def dance(msg):
    i = 0
    while i < 5:
        print(msg)
        time.sleep(1)
        i += 1




if __name__ == '__main__':
  sing_thread = threading.Thread(target=sing)
  dance_thread = threading.Thread(target=dance,args=("哈哈哈哈哈哈",))

  sing_thread.start()
  dance_thread.start()