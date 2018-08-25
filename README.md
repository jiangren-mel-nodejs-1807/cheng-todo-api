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


## Tasks
Create a Todo api route

Create a Task api with route and mongodb

Create a Item api with route and sqlite3 db

Create a middle ware to log all in coming request

Read the whole expressjs official website 