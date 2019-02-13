USE HW_5;

create table users(
	userName varchar(20) Not null, 
    emailAddress varchar(50) Not null unique, 
    password varchar(15) Not null, 
    userID int primary key Not null auto_increment unique, 
    balance long, 
    shippingAddress varchar(200) Not null, 
    phoneNo varchar(15) Not null, 
    zipCode varchar(10) Not null, 
    country varchar(20) Not null
);


insert into users(userName, emailAddress, password, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Wensong Liu", "lws.19940712@gmail.com", "lws1994", 000001, 3000.00, "Huazhong University of Science and Technology, Yunyuan 114, Wuhan", "13260595829", "430074", "China");
insert into users(userName, emailAddress, password, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Dino Konstantopoulos", "dino.k@northeastern.edu", "ProfDino6250", 000002, 10000.00, "Northeastern University, Snell Library 115, Boston", "8570000000", "02115", "America");
insert into users(userName, emailAddress, password, userID, balance, shippingAddress, phoneNo, zipCode, country)
values("Meven Edwin DCunha", "dcunha.m@husky.neu.edu", "Meven6250TA", 000003, 5000.00, "Don Bosco Institute of Technology, Electronics and Communications Engineering, Mumbai", "62506250", "400070", "India");

select * from users;