# user-microservice-node-api
an api that uses CRUD methods to store and retrieve from database

## Prerequisites
### What things you ned to ensure the API runs properly
ensure you have --node, --mongodb and optional(robomongo to view saved collection) on your computer.

## Modules installation
* npm install restify --save
* npm install -g nodemon --save -dev
* npm install mongoose --save
* npm install body-parser --save
* npm install morgan --save(optional - for logging requests to the console)

## How to run the api
use the second command if nodemon the nodemon module is insatalled
* node app.js
* nodemon app.js

## Contribution
pull requests are welcome

## Author
Lois Adegbohungbe

## License
This project is licensed under the MIT license

## Routes
|                   NAME                                      |   ENDPOINT            |
| ------------------------------------------------------------| ----------------------|
| base [get]                                                  | /                |
| user sign up [post]                                         | /signup               |
| user sign in [get]                                          | /signin               |
| for admin, authenticate [get]                               | /authenticate         |
| for admin, get all users [get]                              | /users                |
| for admin, get user by id [get]                             | /user_id/:id          |
| for admin, get user by email [get]                          | /user_emaail/:email   |
| for admin, update [patch]                                   | /update/:id           |
| for admin, delete by id [delete]                            | /delete/:id           |
| for admin, activate or deactivate user [patch]              | /update_status/:email |
