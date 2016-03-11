/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : fast-dev-platform-db

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2016-03-11 16:54:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` varchar(32) NOT NULL COMMENT '主键',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `real_name` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号码',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `sex` tinyint(1) DEFAULT NULL COMMENT '性别：1为男，0为女',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  `create_time` varchar(100) NOT NULL COMMENT '创建日期',
  `update_time` varchar(100) NOT NULL COMMENT '更新日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('5011E3809D114711A4E98B05F2EBCCE5', 'abc', 'E10ADC3949BA59ABBE56E057F20F883E', null, null, null, '1', null, '1457682932094', '1457682953033');
INSERT INTO `t_user` VALUES ('D563B6F67FAE49689AF603B6029E4D59', 'test', '96E79218965EB72C92A549DD5A330112', null, null, null, '1', null, '1457680523644', '1457682836369');
