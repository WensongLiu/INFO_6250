USE HW_5;

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
values("Wensong Liu", "lws.19940712@gmail.com", "lws1994", 000006, 3000.00, "Huazhong University of Science and Technology, Yunyuan 114, Wuhan", "13260595829", "430074", "China");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Dino Konstantopoulos", "dino.k@northeastern.edu", "ProfDino6250", 000007, 10000.00, "Northeastern University, Snell Library 115, Boston", "8570000000", "02115", "America");
insert into users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Meven Edwin DCunha", "dcunha.m@husky.neu.edu", "Meven6250TA", 000008, 5000.00, "Don Bosco Institute of Technology, Electronics and Communications Engineering, Mumbai", "62506250", "400070", "India");

select * from users;
