# NodeJS REST API Boilerplate - Sequelize

## Directory Structure

- **_/API_** - Used to store all API endpoints for testing purpose. These can be easily tested using VS Code's **REST Client** extension
- **_/DB_** - Contains the sample mysql database SQL file to start the project
- **_/models_** - Define all model/table schemas in for using with Sequlize ORM
- **_/controlles_** - Store all controller files for different modules
- **_/routes_** - Store all routes for different modules
- **_/middlewares_** - Store different middleware files for different purposes
- **_app.js_** - Base file that runs the NodeJS App

<br />

## Packages Used

- [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [formidable](https://www.npmjs.com/package/formidable) - A Node.js module for parsing form data, especially file uploads.
- [fs-extra](https://www.npmjs.com/package/fs-extra) - fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods.
- [helmet](https://www.npmjs.com/package/helmet) - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.
- [lodash](https://www.npmjs.com/package/lodash) - The Lodash library exported as Node.js modules.
- [moment](https://www.npmjs.com/package/moment) - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [nodemailer](https://www.npmjs.com/package/nodemailer) - Send e-mails from Node.js
- [yup](https://www.npmjs.com/package/yup) - Yup is a JavaScript schema builder for value parsing and validation.
- [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- [mysql2](https://www.npmjs.com/package/mysql2) - This is required as a support for Sequelize package for MySQL databases.

<br />

> Some of these packages are not used in the project at all. But I included them just for my own reference so I can use them when needed.

<br />

## Dev Dependancies

- [nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

<br />

## Installation Steps

Make required changes inside .env file and simply run
`npm install`

> Whenever you want to migrate database tables, open  **.env** file and set `MIGRATE_DB=TRUE` and then run the development server. Once all tables are migrated, stop the server and update **.env** file back to `MIGRATE_DB=FALSE`. While doing migration, if the table already exists, it will not do any modifications in that table.
> 
- Run development server - `npm run dev`
- Run production server - `npm run start`

And then use any files at **/API/\*.rest** inside VS Code using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension to test the API endpoints. All the endpoints are listed in these **_.rest_** files.

or simply use Postman tool to test all the API endpoints.

<br />

> Make sure to remove all unnecessary packages from **_package.json_** file before deploying to production server

<br />

## Features

- Database configurations using Sequelize
- Implementation of Email script (using mailtrap.io)
- Full CRUD code using TODO List
- Image upload feature implementation
- Data validations using Yup library
- Auth features that includes Signup, Login, Forgot Password, Update Profile, Change Password
- Proper error handling using Middlewares
- API security using cors and helmet packages

<br />

## API Endpoints

GET http://localhost:3333/tasks [ get all tasks ]

GET http://localhost:3333/tasks/1 [ get single task ]

POST http://localhost:3333/tasks [ create new task ]

PUT http://localhost:3333/tasks [ update task ]

DELETE http://localhost:3333/tasks [ delete task ]

POST http://localhost:3333/tasks/update_picture [ update picture ]

POST http://localhost:3333/tasks/send_email [ send test email ]

POST http://localhost:3333/user/signup [ sign up ]

GET http://localhost:3333/user/signup/verify/d8f7e98b395974af9cb206baa5a6a210 [ verify signup link ]

POST http://localhost:3333/user/login [ log in ]

GET http://localhost:3333/user [ get logged in user ]

POST http://localhost:3333/user/update_profile [ update profile ]

POST http://localhost:3333/user/change_password [ change password ]

POST http://localhost:3333/user/forgot_password [ forgot password ]

GET http://localhost:3333/user/forgot_password/verify/d5d5199258fed2cc151d2bb3e18f589a [ verify forgot password link ]

POST http://localhost:3333/user/reset_password [ reset password ]

<br />

## TODO

- [ ] Add tasks here
