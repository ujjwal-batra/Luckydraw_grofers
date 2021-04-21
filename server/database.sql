-- Creating Database
CREATE DATABASE luckydrawgame;

-- Creat User table
CREATE TABLE users (
    ID int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255) NOT NULL,
    ContactNo varchar(15),
    Age int(11)
);

-- Adding dummy data in users
INSERT INTO users (Name, ContactNo, Age) VALUES ('Ellia Barnes','388-1015-12','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alen Baker','356-8609-52','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Brooke Dixon','346-6897-88','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Sydney Casey','514-2275-84','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Olivia Morrison','028-7975-65','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alissa Wells','576-0393-10','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Rafael Warren','723-8088-10','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Derek Kelley','375-5494-11','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Chester Evans','650-2346-09','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Annabella Richardson','095-6250-29','18');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Blake Bennett','314-1768-58','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alexander Hall','404-4329-23','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Byron Hunt','230-8924-94','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Sawyer Robinson','931-0498-43','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Savana Alexander','858-5355-14','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Aida Bennett','084-2623-99','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alford Thomas','496-0935-74','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Brad Moore','718-0340-03','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Lyndon Lloyd','210-6238-86','18');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Grace Craig','056-0978-04','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('John Moore','990-9968-09','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Walter Martin','046-5251-57','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Arianna Carter','060-7266-13','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Abraham Adams','988-1373-88','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('James Watson','230-6247-07','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Aldus Myers','658-1128-98','30');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Miley Carter','736-8457-48','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Fiona Wilson','943-5327-08','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Lenny Harper','529-1753-85','30');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Frederick Bennett','700-4335-48','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Preston Armstrong','160-6211-90','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Ellia Hamilton','758-7884-63','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Tyler Adams','413-7135-93','30');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Jordan Carter','826-9215-94','18');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Anna Hill','767-4268-35','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Melissa Walker','959-4376-64','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Emily Foster','612-5007-06','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Dominik Richardson','934-5472-07','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('George Jones','168-9812-24','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('David Cooper','769-8787-91','30');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Edwin Walker','592-8549-25','20');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Emma Brown','776-1968-98','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Adele Brooks','623-3386-25','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Elian Hall','776-8992-07','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Andrew Cunningham','399-1378-70','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Leonardo Elliott','685-7770-42','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Stuart Baker','758-6723-78','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Edward Gray','551-6965-71','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Paige Gibson','551-9659-56','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Brad Chapman','162-5442-87','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Steven Wilson','882-1262-36','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alen Brown','025-4421-04','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Arnold Tucker','579-7510-75','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alisa Craig','528-1884-11','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Maddie Martin','860-8988-81','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Sofia Alexander','595-5256-55','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Julian Armstrong','491-1177-47','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Adele Fowler','662-3466-44','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Vanessa Turner','472-8104-20','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Marcus Bailey','252-2527-92','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Ellia Hall','003-6837-09','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Jack Richards','872-2162-81','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Amelia Chapman','115-6331-14','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Marcus Murray','158-7005-85','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Charlotte Hunt','818-3321-30','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Catherine Thompson','678-7455-02','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Robert Davis','556-2295-65','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Adam Harris','482-5740-64','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Harold Anderson','257-7389-01','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Miranda Mason','955-8366-86','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Blake Anderson','469-0080-78','18');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Jessica Harris','708-6380-27','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Edith Miller','970-5838-00','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Roland Barnes','329-0325-80','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Tony Phillips','262-4507-69','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alan Barrett','024-3351-23','27');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Jordan Wells','074-2486-41','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('April Tucker','085-2756-09','18');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Ellia Grant','283-8802-18','25');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Belinda Edwards','518-4629-51','30');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Penelope Payne','046-5263-13','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Elise Wilson','558-9381-26','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Maddie Hunt','388-9553-56','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Ada Harrison','290-7960-69','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Isabella Ferguson','044-1090-39','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Owen Bennett','384-4932-68','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Darcy Bennett','373-8691-66','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Spike Smith','332-1799-38','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Charlie Cameron','706-5178-75','22');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Max Baker','456-0162-08','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Chelsea Ryan','971-6517-25','28');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Natalie Russell','447-9552-62','21');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Martin Alexander','064-0202-62','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Briony Phillips','513-3080-11','23');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alexander Taylor','177-7784-77','29');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Ellia Brooks','958-1591-88','24');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Alberta Ferguson','677-6430-92','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Natalie Ross','659-0162-97','19');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Tiana Harris','668-2369-89','26');
INSERT INTO users (Name, ContactNo, Age) VALUES ('Jack Holmes','192-5194-60','19');


-- Creating events database
CREATE TABLE luckydraw_event (
    ID int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255) NOT NULL,
    StartTime TIMESTAMP,
    EndTime TIMESTAMP,
    FirstPrize varchar(255),
    SecondPrize varchar(255),
    ThirdPrize varchar(255)
);

--  Adding dummy data in luckydraw_event database
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw0', NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 2 DAY, 'emtncexxyq','ovezswvd','qmsfiy');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw1', NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 4 DAY, 'ujbhpixgnx','naepsjne','zdupez');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw2', NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 6 DAY, 'tmffbqadda','pvtdzoqy','nmxnzp');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw3', NOW() + INTERVAL 7 DAY, NOW() + INTERVAL 8 DAY, 'yxjxlcsrfo','osjzmnqa','zacexn');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw4', NOW() + INTERVAL 9 DAY, NOW() + INTERVAL 10 DAY, 'hphinejjyg','hfvpwrkr','moaxci');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw5', NOW() + INTERVAL 11 DAY, NOW() + INTERVAL 12 DAY, 'dqfizcajid','jnuifqwg','zmsflv');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw6', NOW() + INTERVAL 13 DAY, NOW() + INTERVAL 14 DAY, 'krqwsydyce','hlplmqpu','pibbfi');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw7', NOW() + INTERVAL 15 DAY, NOW() + INTERVAL 16 DAY, 'xjmfgqjihg','czhpiqym','yzcsmi');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw8', NOW() + INTERVAL 17 DAY, NOW() + INTERVAL 18 DAY, 'abwrmtzemw','wnxlxilc','josbqo');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw9', NOW() + INTERVAL 19 DAY, NOW() + INTERVAL 20 DAY, 'jmiwqyxkej','cdqserbr','ljixfc');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw10', NOW() + INTERVAL 21 DAY, NOW() + INTERVAL 22 DAY, 'bebfbwbtug','suyzuxxb','iewcsg');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw11', NOW() + INTERVAL 23 DAY, NOW() + INTERVAL 24 DAY, 'akqdgmkmgj','wterqpgb','obtqwh');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw12', NOW() + INTERVAL 25 DAY, NOW() + INTERVAL 26 DAY, 'vxrnxdataf','zumeslyq','qgefpy');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw13', NOW() + INTERVAL 27 DAY, NOW() + INTERVAL 28 DAY, 'kabilpwlxp','wympwvee','lbqbef');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw14', NOW() + INTERVAL 29 DAY, NOW() + INTERVAL 30 DAY, 'bjdzdciqzj','qiuxpnvr','odlcme');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw15', NOW() + INTERVAL 31 DAY, NOW() + INTERVAL 32 DAY, 'hmaogymivd','alimjeup','vyqncf');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw16', NOW() + INTERVAL 33 DAY, NOW() + INTERVAL 34 DAY, 'fdlafzeeoc','axkglkcx','xypgfj');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw17', NOW() + INTERVAL 35 DAY, NOW() + INTERVAL 36 DAY, 'snmzsgrpvh','mtagjwfa','qhvsit');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw18', NOW() + INTERVAL 37 DAY, NOW() + INTERVAL 38 DAY, 'soxgquutue','slnfhlxl','qkpbiq');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw19', NOW() + INTERVAL 39 DAY, NOW() + INTERVAL 40 DAY, 'biveyasrpx','sbpuaisd','zuprtx');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw20', NOW() + INTERVAL 41 DAY, NOW() + INTERVAL 42 DAY, 'fobugbjrfc','xihjseut','oobrll');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw21', NOW() + INTERVAL 43 DAY, NOW() + INTERVAL 44 DAY, 'cneiltokmh','bccnurtm','yckrtk');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw22', NOW() + INTERVAL 45 DAY, NOW() + INTERVAL 46 DAY, 'vrfgszvmgl','dndqjxmv','erurdw');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw23', NOW() + INTERVAL 47 DAY, NOW() + INTERVAL 48 DAY, 'bptkkabcdn','tmsbyaqq','bxnxra');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw24', NOW() + INTERVAL 49 DAY, NOW() + INTERVAL 50 DAY, 'zqjfucsqpt','vtkvppzt','agdavo');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw25', NOW() + INTERVAL 51 DAY, NOW() + INTERVAL 52 DAY, 'lcjhutoxbj','bsypezaj','epiluu');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw26', NOW() + INTERVAL 53 DAY, NOW() + INTERVAL 54 DAY, 'qecabwhrqa','hudaqofn','trlbpl');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw27', NOW() + INTERVAL 55 DAY, NOW() + INTERVAL 56 DAY, 'sehroueqbv','nrriqnnn','laaxgn');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw28', NOW() + INTERVAL 57 DAY, NOW() + INTERVAL 58 DAY, 'ujbipeyfyt','zxzoexqv','yqutvu');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw29', NOW() + INTERVAL 59 DAY, NOW() + INTERVAL 60 DAY, 'kyiprmknqg','vzytupdh','nqycdd');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw30', NOW() + INTERVAL 61 DAY, NOW() + INTERVAL 62 DAY, 'lleoubgiwg','knxhijas','dprwvp');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw31', NOW() + INTERVAL 63 DAY, NOW() + INTERVAL 64 DAY, 'izhrpoynaf','tnmkohnu','grwnvn');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw32', NOW() + INTERVAL 65 DAY, NOW() + INTERVAL 66 DAY, 'xpwoqplypn','jyfdiuvf','ncrbau');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw33', NOW() + INTERVAL 67 DAY, NOW() + INTERVAL 68 DAY, 'sbuykhruzz','fkgtpuna','szxdxn');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw34', NOW() + INTERVAL 69 DAY, NOW() + INTERVAL 70 DAY, 'nglxmhcpnj','hhuwhviq','awwtun');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw35', NOW() + INTERVAL 71 DAY, NOW() + INTERVAL 72 DAY, 'hwulprpmuc','lvhoolgc','vbzats');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw36', NOW() + INTERVAL 73 DAY, NOW() + INTERVAL 74 DAY, 'ykbftqaksk','mtsnpxid','yaaeio');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw37', NOW() + INTERVAL 75 DAY, NOW() + INTERVAL 76 DAY, 'fatqocvxhl','ahtryvpm','ynatph');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw38', NOW() + INTERVAL 77 DAY, NOW() + INTERVAL 78 DAY, 'lnadbxwvef','ggaatcls','uuponn');
INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('luckyDraw39', NOW() + INTERVAL 79 DAY, NOW() + INTERVAL 80 DAY, 'fmxtxhiedw','acfaigls','zgbnjz');

-- LuckyDraw winner database
CREATE TABLE luckydraw_winners (
    ID int(10) NOT NULL,
    Winner int(10),
    SecondPlace int(10),
    ThirdPlace int(10)
);

-- LuckyDraw ticket database
CREATE TABLE tickets (
    TicketID int(10) NOT NULL,
    UserID int(10)
);