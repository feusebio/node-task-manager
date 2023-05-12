# node-task-manager
NodeJs task manager API
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
CREATE  TABLE IF NOT EXISTS `tasks` (...
CREATE  TABLE IF NOT EXISTS `users` (...
CREATE  TABLE IF NOT EXISTS `notifications` (...
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