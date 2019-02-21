use HW_5;

create table items(
	itemID int Not null primary key auto_increment unique,
	itemName varchar(100) not null,
	itemSize varchar(4) not null,
	itemAmount int not null,
	price double not null,
	description varchar(200),
	picLink varchar(300) not null
);

-- insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
-- values(000001,"null","null",0,0.00,"null","null");
-- insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
-- values(000002,"null","null",0,0.00,"null","null");
-- insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
-- values(000003,"null","null",0,0.00,"null","null");
-- insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
-- values(000004,"null","null",0,0.00,"null","null");
-- insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
-- values(000005,"null","null",0,0.00,"null","null");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000001,"Off-White Jordan 1 Retro High University Blue","8.5",11,1198.00,"Favorite shoes.","https://pmcfootwearnews.files.wordpress.com/2018/05/nike-air-jordan-1-retro-high-off-white-powder-blue-release-info-2.jpg?w=1024&h=639&crop=1");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000002,"Off-White Jordan 1 Retro High University Blue","9.5",5,1050.00,"Favorite shoes.","https://pmcfootwearnews.files.wordpress.com/2018/05/nike-air-jordan-1-retro-high-off-white-powder-blue-release-info-2.jpg?w=1024&h=639&crop=1");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000003,"Yeezy Boost 350 V2 Zebra","10",8,350.00,"Cool shoes.","https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra/Images/Adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256");
insert into items(itemID, itemName, itemSize, itemAmount, price, description, picLink)
values(000004,"Vans x Fear of God Era 95","8",12,756.00,"Nice shoes.","https://www.allikestore.com/media/catalog/product/cache/1/image/541x541/9df78eab33525d08d6e5fb8d27136e95/v/a/vans-x-fear-of-god-era-95-dx-marshmellow-black-4.jpg");

select * from items;

SET SQL_SAFE_UPDATES = 0;