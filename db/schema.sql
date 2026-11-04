-- %%
show databases;

-- %%
CREATE DATABASE IF NOT EXISTS wdp_final_project;

use wdp_final_project;

-- %%
create table if not exists USERS (
	UserID INT AUTO_INCREMENT PRIMARY KEY,
	UserName VARCHAR(255) NOT NULL,
	Email VarChar(255) NOT NULL,
	Password VarChar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment VARCHAR(511),

    FOREIGN KEY (UserID)
        REFERENCES USERS(UserID)
);

create table if not exists stats (
	statsID int auto_increment primary key,
	UserID int not null,
	TimeSpentPlaying int default 0,
	levelsCompleted int default 0,
	deathCount int default 0,

	FOREIGN KEY (UserID)
        REFERENCES USERS(UserID)
);

-- %%
DELIMITER //

CREATE TRIGGER after_user_insert
AFTER INSERT ON USERS
FOR EACH ROW
BEGIN
    INSERT INTO stats (UserID)
    VALUES (NEW.UserID);
END //

DELIMITER ;

-- %%
insert into users 
	(UserName, Email, Password)
values
	('Bob', 'test@gmail.com', '12345'),
	('Patrick', 'patrick56hughes@gmail.com', '098765'),
	('Test', 'test@gmail.com', '45678');

-- %%
insert into reviews 
	(UserID, rating, comment)
values
	(1, 5, 'Great game I love it!'),
	(2, 4, 'Awsome!'),
	(3, 5, 'Yes!');

-- %%
show tables;

-- %%
describe users;

-- %%
show create table users;