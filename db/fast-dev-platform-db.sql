/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : fast-dev-platform-db

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2016-03-07 17:42:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` varchar(32) NOT NULL COMMENT '主键',
  `account` varchar(50) NOT NULL COMMENT '用户名',
  `real_name` varchar(50) DEFAULT NULL COMMENT '真名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号码',
  `sex` tinyint(4) DEFAULT NULL COMMENT '性别',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  `create_time` varchar(100) NOT NULL COMMENT '创建日期',
  `update_time` varchar(100) DEFAULT NULL COMMENT '更新日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('2167AA177A634BB9ACCF9012299D6C88', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457340970540', '1457340970540');
INSERT INTO `t_user` VALUES ('2BB06A9E47CD45D0BB002A7104116C43', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457340272955', '1457340272955');
INSERT INTO `t_user` VALUES ('3FDAEE2A474845F8A0AEA995B6AB35E7', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457340274267', '1457340274267');
INSERT INTO `t_user` VALUES ('702F40705A824EB8AE4F791B23A69051', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457341023723', '1457341023723');
INSERT INTO `t_user` VALUES ('970941266D85446EB50895653489510A', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457340249842', '1457340249842');
INSERT INTO `t_user` VALUES ('98C41BA0348B4118AEAD30CA0F4BE140', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457343412175', '1457343412175');
INSERT INTO `t_user` VALUES ('B32D96F1F9084B08A704C8E1FE3D6828', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457341021350', '1457341021350');
INSERT INTO `t_user` VALUES ('CAFCD57231104325A0B73E12F982A82D', 'test', '测试', 'E10ADC3949BA59ABBE56E057F20F883E', '13600000000', '1', '福建省福州市鼓楼区软件园C区', '1457342368908', '1457342368908');
