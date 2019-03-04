
![cf](http://i.imgur.com/7v5ASc8.png) Lab Submission Instructions
============================================================================
# Lab-07-middleware
Lab-07-middleware

## Project Name
Lab-07-middleware
https://travis-ci.com/Alwynblake/Lab-07-middleware

### Author: Alistair Blake

### Links and Resources
repo https://github.com/Alwynblake/Lab-07-middleware
https://travis-ci.com/Alwynblake/Lab-07-middleware
back-end
front-end https://lLab-07-middleware.herokuapp.com/
## Canvas Submission
* Link to the README.md in your lab repo
* **Code Sandbox Submissions**
  * Create a folder called `docs` (under `/public` for React apps)
  * Upload your README.md and any supportive images to this folder.
  * Submit a link to your `/docs/README.md` for your canvas submission
  
## Operation
* In the folder for each class in the class repository, you will find a `lab` folder
* The folder for each day in the repo contains:
  * LAB.md - The instructions for the lab
  * README.md - A template which you will fill out each day to submit your lab 
  * `starter-code` folders - Contains any starter code for your lab
* Create a new github repository for each lab
* If there is a `starter-code` folder for the lab, **copy it's contents** *(not the folder itself)* into your new repository
* Ensure that your repository/branch is connected to travis-ci.com
* For deployable labs (servers)...
* Ensure that your repository/branch is connected to a dyno at heroku.com
* Create a new one for each day that contains a server deployment
    
## Assignment: Middleware and Routing Practice
* Create a repository called lab-07-middleware and copy the contents of the starter-code/middleware folder into it.
* Complete the following tasks in the server.js file
* Write error handling middleware
* Write not found middleware and a catch-all route that uses it.
* Write middleware that runs on every route that adds a property called requestTime with a value of the current Date/Time to the request object.
* Write middleware that runs on every route that will run a console.log() containing the method, path, and the new property requestTime from the request
* Write middleware that runs only on the /c route that performs an additional console.log() with a randomly generated number
* Write middleware that runs on the /d route that raises an error using next
* Write middleware that runs on the and /b route that takes a number as a parameter, squares it, and and sets that value on the request object in a property called number.
* Alter the /b route to .send() that number from the request object to the browser.
* Ensure that all of your routes and middleware work as expected
* Create a router in a separate file called routes.js
* Move the /c and /d routes into it
* Export it
* Import it into the server file and properly use() it.

 
## Deployment - Server Based Labs
 * Your server must be deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable
 
## Deployment - React Labs
 * Your app must be deployed at AWS Cloudfront
 * Use an automated deployment, connecting your repository to AWS through cloud formation
 
## Testing
 * Write a complete set of tests for all data models, independent of the server
 * For testing the server and routes, use `supertest` to do end-to-end testing
   * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * Your tests must be running green on travis.com
 
##  Documentation
* API Server Documentation
* Swagger Docs
* Document all routes and methods for all models
* You can start with the swagger docs from the previous lab
* Place the swagger.json files in the doc folder
* Implement the /api/v1/MODEL/doc route for each of your models
* JSDoc
* Document all of your functions
* Export your documentation in a doc folder
* Ideally, your swagger docs from the previous lab should still work!
* The difference is that this is a custom API server instead of the simpler ‘json-server’
 