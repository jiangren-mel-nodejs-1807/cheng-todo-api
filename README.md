## How to create an expressjs project

Create a new github repo https://github.com/jiangren-mel-nodejs-1807/cheng-todo-api

Checkout this repo to your local machine /c/workspace/cheng-todo-api

Install expressjs and express-generator if you haven't done that

Follow https://expressjs.com/en/starter/generator.html to create a new expressjs project. 
* cd /c/workspace/cheng-todo-api
* Make sure the generated code is in your root of git repo. To do this you can use
```sh
express .
``` 
  instead of 
```sh
express myapp
```
As it would create a new folder myapp and generate code in myapp

Commit and push your code to the git repo local and remote.
* The node_modules folder should not be included. You can add a .gitignore file in your root directory. And you can reference the one in cheng-todo-api project. https://github.com/jiangren-mel-nodejs-1807/cheng-todo-api/blob/master/.gitignore

## Setup heroku cloud hosting
You can use your github account to register the heroku account.

Goto the heroku dashboard and create a new app https://dashboard.heroku.com/apps

In the **Deployment method** section, choose the Github connect

Then in the **Connect to GitHub** section, find the cheng-todo-api in jiangren-mel-nodejs-1807 and connect. And you may need to give the access first.

Enable the **Automatic Deploys**

You can manually trigger the deploy by click the **Deploy Branch** button

## Create a router
To create a router you can fellow the guide https://expressjs.com/en/guide/routing.html

To separate the router and model in to different files and folders you can look at cheng-todo-api project. Routers are in src/routes and models are in src/models.

Be careful in src/routes/index.js the routes are mapped to different urls.

## Create a model with data in a local variable
Look at the src/models/todo.js

## Create a model with MongoDB database
You can create a mongodb database in mlab cloud. mlab.com is easy to use. 

You need to create a database user(e.g. user1/user1) before you can connect.

Initiate the connection in app.js 
```js
mongoose.connect('mongodb://user1:user1@ds231501.mlab.com:31501/todo');
```
Install the mongoose lib and use it instead of using mongodb directly. Code is in src/models/task.js

## Create a model with sqlite3 database
Download and install DB browser for sqlite https://sqlitebrowser.org/

Use it to create a new database with all the tables. The item model is using this db. Which is in src/models/item.js

## Create a nested route for Part
Model item has many Part model. e.g. we can query for all the parts in one item. The nested route example is in src/routes/item.js. 

To get the parts you need to join the Item table and Part table. The example is in src/models/item.js


## Task 1 (Todo item)
Create a Todo api route

Create a Task api with route and mongodb

Create a Item api with route and sqlite3 db

Create a middle ware to log all in coming request

Read the whole expressjs official website 

## Task 2 (Learning system)
Create api for model Student and Course which has a many to many relation.
