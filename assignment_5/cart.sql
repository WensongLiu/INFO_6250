use HW_5;

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

SET SQL_SAFE_UPDATES = 0;
update cart set itemInCartAmount=itemInCartAmount+1 where cart.userID=6 && cart.itemID=1;

delete FROM cart WHERE userID = 10;