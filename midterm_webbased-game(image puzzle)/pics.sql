USE midterm;

SET SQL_SAFE_UPDATES = 0;

create table picInfo(
	picLink varchar(1000) , 
    picTittle varchar(50)
);

insert into picInfo(picLink, picTittle) values("https://katekos.com/wp-content/uploads/2018/09/2018-art-painting-acrylic-floral-by-Kate-Kos-Summers-Wonderland-.jpg","Summers Wonderland");
insert into picInfo(picLink, picTittle) values("https://katekos.com/wp-content/uploads/2018/05/2018-art-painting-acrylic-seascape-Irish-beach-by-Kate-Kos-Golden-Waves-copy.jpg","Golden Waves");
insert into picInfo(picLink, picTittle) values("https://katekos.com/wp-content/uploads/2018/01/2017-art-painting-acrylic-seascape-Courtown-by-Kate-Kos-Sea-Stories-Bridge-View-copy.jpg","Sea Stories Bridge");
insert into picInfo(picLink, picTittle) values("https://katekos.com/wp-content/uploads/2017/09/2017-art-painting-acrylic-floral-by-Kate-Kos-Summer-Memories-4-copy-2.jpg","Summer Memories");
insert into picInfo(picLink, picTittle) values("https://katekos.com/wp-content/uploads/2017/09/2017-art-painting-acrylic-floral-by-Kate-Kos-Summer-Memories-2.jpg","Summer Flowers");
insert into picInfo(picLink, picTittle) values("https://www.tripimprover.com/uploads/7/3/6/3/73636755/van-gogh-starry-night_8.jpg","Starry Night");
insert into picInfo(picLink, picTittle) values("https://www.tripimprover.com/uploads/7/3/6/3/73636755/van-gogh-sunflowers-london-version_11.jpg","Sunflowers");
insert into picInfo(picLink, picTittle) values("https://www.exodustravels.com/sites/exod/files/styles/exo_400_400/public/node/trip/images/taj_mahal.jpg","Taj Mahal");
insert into picInfo(picLink, picTittle) values("http://americansforsecuringtheborder.com/wp-content/uploads/2018/12/statue-of-liberty-t-elegant-scholarships-in-usa-usa-scholarship-of-statue-of-liberty-t.jpg","Statue Of Liberty");
insert into picInfo(picLink, picTittle) values("https://imgc.artprintimages.com/img/print/china-10mkm2-collection-forbidden-city-beijing_u-l-pz6omz0.jpg","Forbidden City");
insert into picInfo(picLink, picTittle) values("https://relais12bis.com/wp-content/uploads/2016/02/service-2-400x400.jpg","Eiffel Tower");
insert into picInfo(picLink, picTittle) values("https://www.androidfreeware.net/software_images/big-ben-london-live-wallpaper.1.jpg","Big Ben");
insert into picInfo(picLink, picTittle) values("https://i.pinimg.com/originals/e4/0d/87/e40d8733f9f29ae1834e4e5410b7fb5c.jpg","Puppy");
insert into picInfo(picLink, picTittle) values("https://pbs.twimg.com/profile_images/692559440516620290/v6TwZ-vX_400x400.jpg","Confused Nick Young");
insert into picInfo(picLink, picTittle) values("https://www.scadshow.com/sites/show/files/event_images/ironman_listing.jpg","Ironman");

select * from picInfo;