# node-task-manager
NodeJs task manager API (ES Modules structure)
## PART I: Download & Build on local

## Method 1: From github
### 1) Clone the repository, install node packages  and verify routes locally

``` 
//on local
git clone https://github.com/feusebio/node-task-manager
cd node-task-manager
npm install
npm start
```
## 2) Setup database
``` 
CREATE DATABASE app_tasks;

# Table Tasks
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `summary` text DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `performed_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`));



# Table Users
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `token` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`));


# Table Notifications
CREATE TABLE `app_tasks`.`notifications` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `task_id` INT NULL,
  `task_status` VARCHAR(45) NULL,
  `status` TINYINT NULL,
  `sent_at` DATETIME NULL,
  `created_at` DATETIME NULL,
  PRIMARY KEY (`id`));

INSERT INTO `app_tasks`.`tasks`...
...
```
## 3) Create a .env file w/ settings
``` 
DB_HOST='localhost'
DB_USER='admin'
DB_PW='*********'
DB_NAME='app_tasks'
```