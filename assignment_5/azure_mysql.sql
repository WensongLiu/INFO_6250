USE HW_5;

SET SQL_SAFE_UPDATES = 0;

create table users(
	userName varchar(20) , 
    emailAddress varchar(50) unique, 
    pwd varchar(15) , 
    userID int primary key  auto_increment unique Not null, 
    balance double, 
    shippingAddress varchar(200) , 
    phoneNo varchar(15) , 
    zipCode varchar(10) , 
    country varchar(20) 
);

insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("noExist","noExist","noExist",000001,0.00,"noExist","noExist","noExist","noExist");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("exist","exist","exist",000002,0.00,"exist","exist","exist","exist");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("wrong","wrong","wrong",000003,0.00,"wrong","wrong","wrong","wrong");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("use_1","use_1","use_1",000004,0.00,"use_1","use_1","use_1","use_1");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("use_2","use_2","use_2",000005,0.00,"use_2","use_2","use_2","use_2");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Wensong Liu", "lws.19940712@gmail.com", "lws1994", 000006, 30000.00, "Huazhong University of Science and Technology, Yunyuan 114, Wuhan", "13260595829", "430074", "China");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Dino Konstantopoulos", "dino.k@northeastern.edu", "ProfDino6250", 000007, 100000.00, "Northeastern University, Snell Library 115, Boston", "8570000000", "02115", "America");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Meven Edwin DCunha", "dcunha.m@husky.neu.edu", "Meven6250TA", 000008, 50000.00, "Don Bosco Institute of Technology, Electronics and Communications Engineering, Mumbai", "62506250", "400070", "India");

select * from users;

delete FROM users WHERE userID = 9;


create table items(
	itemID int Not null primary key auto_increment unique,
	itemName varchar(100) not null,
	itemSize varchar(4) not null,
	itemAmount int not null,
	price double not null,
	description varchar(200),
	picLink varchar(300) not null
);

insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000001,"Off-White Jordan 1 Retro High University Blue","8.5",110,1198.00,"Favorite shoes.","https://pmcfootwearnews.files.wordpress.com/2018/05/nike-air-jordan-1-retro-high-off-white-powder-blue-release-info-2.jpg?w=1024&h=639&crop=1");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000002,"Off-White Jordan 1 Retro High University Blue","9.5",50,1050.00,"Favorite shoes.","https://pmcfootwearnews.files.wordpress.com/2018/05/nike-air-jordan-1-retro-high-off-white-powder-blue-release-info-2.jpg?w=1024&h=639&crop=1");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000003,"Yeezy Boost 350 V2 Zebra","10",80,350.00,"Cool shoes.","https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra/Images/Adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000004,"Vans x Fear of God Era 95","8",120,756.00,"Nice shoes.","https://www.allikestore.com/media/catalog/product/cache/1/image/541x541/9df78eab33525d08d6e5fb8d27136e95/v/a/vans-x-fear-of-god-era-95-dx-marshmellow-black-4.jpg");

select * from items;

create table cart(
	userID int not null,
    itemID int not null,
    itemName varchar(100) not null,
    itemSize varchar(4) not null,
    itemInCartAmount int not null,
    price double not null,
    picLink varchar(300) not null
);

insert into cart(userID,itemID,itemName,itemSize,itemInCartAmount,price,picLink)
values(000006,000001,"Off-White Jordan 1 Retro High University Blue","8.5",1,1198.00,"https://pmcfootwearnews.files.wordpress.com/2018/05/nike-air-jordan-1-retro-high-off-white-powder-blue-release-info-2.jpg?w=1024&h=639&crop=1");

select * from cart;

update cart set itemInCartAmount=itemInCartAmount+1 where cart.userID=6 && cart.itemID=1;

delete FROM cart WHERE userID = 0;



create table credit_card(
	cardNo varchar(48) not null,
    cardPwd varchar(12) not null,
    cardName varchar(50) not null,
    cardBalance double ,
    cardMonth int not null,
    cardYear int not null,
    cardCvc varchar(6) not null
);

insert into credit_card(cardNo, cardPwd, cardName, cardBalance, cardMonth, cardYear, cardCvc)
values("0000111122223333","777777","Wensong Liu",30000,12,2025,"777");


Create table order_history(
	orderID int not null,
    userID int not null,
	itemID int not null,
    orderDate varchar(20) not null,
	itemName varchar(100) not null,
    itemSize varchar(4) not null,
	itemBought int not null,
	itemPrice double not null,
    totalCost double not null
);

insert into order_history(orderID, userID, itemID, orderDate, itemName, itemSize, itemBought, itemPrice, totalCost) 
values (00000, 00000, 00000, "default", "default", "0", 0, 0.0, 0.0);

select * from order_history;


CREATE TABLE log_record(
  userID int not null,
  record varchar(400)
) ;

select * from log_record;


