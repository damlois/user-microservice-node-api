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
|                   NAME                          |   ENDPOINT            |              PARAMS                                 |
| ------------------------------------------------| ----------------------|-----------------------------------------------------|
| base [get]                                      | /                     |           NONE                                      |
| user sign up [post]                             | /signup               |body.{name, age, email, admin: true(for only admins) |    
| user sign in [get]                              | /signin               |[query param] - email                                |                     
| authenticate [get] admins get token to access   | /authenticate         |[query param] - email                                |                
| other endpoint from here                        |                       |                                                     |
| for admin, get all users [get]                  | /users                |[query param] - token                                |
| for admin, get user by id [get]                 | /user_id              |[route param] - id & [query] - token                 |
| for admin, get user by email [get]              | /user_email           |[route] - email & [query] - token                    |
| for admin, update [patch]                       | /update               |[route param] - id & [query]-token                   |
| for admin, delete by id [delete]                | /delete               |[route param] - id & [query]-token                   |
| for admin, activate or deactivate user [patch]  | /update_status        |[route] - email, [query] - token  &                  |                                                                                     |                                                 |                       |action(activate or deactivate)                       | 
