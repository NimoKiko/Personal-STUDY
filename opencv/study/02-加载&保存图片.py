import cv2 as cv

# 加载图片 imread()
img = cv.imread("C:\Personal\Project\Mine\Personal-STUDY\opencv\img\_test.jpg",1)

cv.namedWindow('img',cv.WINDOW_NORMAL)

cv.resizeWindow('img',500,800)

while True:
  cv.imshow('img',img)
  key = cv.waitKey(0)
  if(key == ord('q')):
    print('exit')
    break
  elif(key == ord('s')):
    # imwrite() 保存图片的 API
    cv.imwrite("C:\Personal\Project\Mine\Personal-STUDY\opencv\img\_test_2.jpg",img)
    print('save success!')
  else:
    print('other')



cv.destroyAllWindows()
    
    