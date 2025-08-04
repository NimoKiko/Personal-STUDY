import cv2 as cv


# VideoCapure() 视频采集 API
cv.namedWindow('video',cv.WINDOW_AUTOSIZE)

# cv.resizeWindow('video',640, 480)
# 获取视频设备
cap = cv.VideoCapture("C:\Personal\Project\Mine\Personal-STUDY\opencv\img\_test.mp4")

while True:
  ret, frame = cap.read()
  # 展示视频帧
  cv.imshow('video',frame)
  # 等待键盘事件
  key = cv.waitKey(20)
  # 如果输入q则退出
  if(key & 0xFF == ord('q')):
    break

# 释放窗口
cap.release()
cv.destroyAllWindows()