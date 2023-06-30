-- 插入语句
INSERT INTO `SQL练习` VALUES (4, 'Jack', '321321', 1);
INSERT INTO `SQL练习` VALUES (3, 'July', '123456', 0);
INSERT INTO `SQL练习` VALUES (2, '李四', '321', 0);
INSERT INTO `SQL练习` VALUES (1, '张三', '123', 0);

-- 查询全表
SELECT * from `user`;

-- 删除语句
DELETE from user where id=2

-- 更新语句
UPDATE user set PASSWORD='777777' where id=1

-- 统计count
-- 使用as能给统计出来的列命名
SELECT count(*) as num from user where `status` = 0

-- 排序 ORDER BY
select * from  user ORDER BY id DESC
