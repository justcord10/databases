DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int auto_increment,
  name varchar(50) not null,
  primary key (id)
);

CREATE TABLE messages (
  id int auto_increment,
  text varchar(255) not null,
  userid int,
  room varchar(50) default 'lobby',
  createdat datetime default current_timestamp,
  primary key (id),
  foreign key (userid) references users(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

