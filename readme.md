# Shopmart REST API

A simple Shopmart RESTful API that allows client applications to create, read, edit and delete products and also allows to create user profile.

## End Points

### GET /user/createAUser

The above end point creates a user. You are required to submit the user data in the body of the request (as JSON): The data includes :

- firstName (required)
- lastName (required)
- email (required)
- password (required)
- phoneNumbers (optional)

### GET /user/getAUser/id

The above end point returns a user based on the id provided

### GET /product/createAProduct

The above end point creates a product. You are required to submit the user data in the body of the request (as JSON): The data includes :

- productName (required)
- productPrice (required)
- productDescription (optional)
- productCategory (required)
- productQuantity (required)
- bestSeller (required)
- url (optional)

### GET /product/getProducts

The above end point returns all products

### GET /product/getAProduct?bestSeller=true

The above end point returns all products which are the best seller

### GET /product/getProducts?category=(any category)

The above end point returns all products of specified category


### GET /product/getCategories

The above end point returns all categories that are stored in database

### GET /product/getAProduct/id

The above end point returns a product based on the id provided


### PUT /product/updateAProduct

The above end point updates a product based on the id provided. You are required to submit the new product data in the body of the request (as JSON) : The data could include any of the following :

- productName 
- productPrice 
- productDescription 
- productCategory 
- productQuantity 
- bestSeller 
- url 


### DELETE /product/deleteaProduct

The above end point deletes a product based on the id provided

## Rules to Set up application

1. Clone source code by running: **npm install**
1. Ensure that you create a folder called **config**
1. Within the **config** folder, create a file called **keys.env**
1. Within the **keys.env** file, create two environment variables
   - **MONGODB_QUERY_STRING** - Assign your Database Connection String to the variable
   - **PORT** - Assign 3000
1. Run application by running : **npm run dev**