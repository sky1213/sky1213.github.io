set names utf8;
create database jinli character set utf8;
use jinli;
create table jl_user(
    id int primary key AUTO-INCREMENT,
    name varchar(64),
    pwd varchar(32)
);
insert into jl_user values(null,"caohongtao","123456");
insert into jl_user values(null,"liuwang","123456");
/**热卖推荐表**/
CREATE TABLE rm_list(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(32),
  rname VARCHAR(64),
  rcent VARCHAR(64),
  price FLOAT(8,2)
);
INSERT INTO rm_list VALUES
(1,'img/shouye/hr_1.jpg','W909','双屏翻盖，4GB+64GB','3999'),
(2,'img/shouye/hr_2.jpg','金刚2','双卡全网通，4000mAh电池','1399'),
(3,'img/shouye/hr_3.jpg','F5','纤薄超续航，4GB+32GB','1499'),
(4,'img/shouye/hr_4.jpg','S9','前置1300万像素，后置双摄','2499'),
(5,'img/shouye/hr_5.jpg','S6 Pro','金属机身，4GB+64GB','2499'),
(6,'img/shouye/hr_6.jpg','金刚公开版','4000mAh电池，双卡双待双4G','999');
/**精品配件表**/
CREATE TABLE jp_list(
  jid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(32),
  jname VARCHAR(64),
  jcent VARCHAR(64),
  price FLOAT(8,2)
);
INSERT INTO jp_list VALUES
(1,'img/shouye/ea_1.jpg','线控自拍杆','迷你携带，线控美拍','49'),
(2,'img/shouye/ea_2.jpg','数据线','高速数据传输','20'),
(3,'img/shouye/ea_3.jpg','旅行充电器','流线腰身，高效充电','40'),
(4,'img/shouye/ea_4.jpg','快充充电器','高速快充，高效节能','69'),
(5,'img/shouye/ea_5.jpg','HiFi耳机','HI-FI魔音，震撼享受','69'),
(6,'img/shouye/ea_6.jpg','贴膜','高清透光，耐磨防油污','10');