import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

# namedWindow() 命名窗口
cv.namedWindow('new',cv.WINDOW_NORMAL)
# resizeWindow() 重新设置窗口尺寸
cv.resizeWindow('new',400,400)
# imshow() 展示窗口
cv.imshow('new',0)
# waitKey() 等待时间
cv.waitKey(0)
# 销毁窗口
cv.destroyAllWindows()