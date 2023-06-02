# Product Catalog API Documentation

Welcome to the official documentation for the Product Catalog API. This RESTful API provides access to a comprehensive collection of technology products, including smartphones, laptops, tablets, and more. With this API, you can retrieve detailed information about various products, such as their names, prices, and companies.

## Base URL

The base URL for all API endpoints is:

[https://api.productcatalogapi.com/v1](https://rest-api-production-489c.up.railway.app/api/products/)


## Authentication

The Product Catalog API does not require authentication to access public data.  

## Endpoints

The following endpoints are available in the Product Catalog API:

### Get All Products

Retrieve a list of all products available in the catalog.

**Endpoint:**

GET ```/api/products/```

**Response:**

```json
{
    "Products": [
        {
            "_id": "6478e7489e2b2d348b22f974",
            "name": "iphone12",
            "price": 1540,
            "featured": true,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "apple",
            "__v": 0
        },
        {
            "_id": "6478e7489e2b2d348b22f973",
            "name": "iphone",
            "price": 154,
            "featured": false,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "apple",
            "__v": 0
        },        
        ...
       ]
  }
```

Search Products  
Search for products based on specific criteria, such as name, price range, or company.

Endpoint:  
GET ```/api/products/?company=dell```

Response:  
```json
{
    "Products": [
            {
            "_id": "6478e7489e2b2d348b22f977",
            "name": "dell xps",
            "price": 999,
            "featured": false,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "dell",
            "__v": 0
        },
        {
            "_id": "6478e7489e2b2d348b22f97b",
            "name": "dell inspiron",
            "price": 699,
            "featured": false,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "dell",
            "__v": 0
        },
        {
            "_id": "6478e7489e2b2d348b22f97f",
            "name": "dell ultrabook",
            "price": 899,
            "featured": true,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "dell",
            "__v": 0
        },       
        ...
       ]
  }
```

Sort Products    
Sort products based on price , name, company name etc in both ascending and descending order 

Endpoint:  
GET ```/api/products/?sort=price```

Response:  
```json
{
    "Products": [
            {
            "_id": "6478e7489e2b2d348b22f988",
            "name": "mi earphones",
            "price": 29,
            "featured": false,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "mi",
            "__v": 0
        },
        {
            "_id": "6478e7489e2b2d348b22f984",
            "name": "mi power bank",
            "price": 49,
            "featured": false,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "mi",
            "__v": 0
        },
        {
            "_id": "6478e7489e2b2d348b22f98c",
            "name": "mi bluetooth speaker",
            "price": 69,
            "featured": false,
            "rating": 4.9,
            "createdAt": "2023-06-01T18:45:23.193Z",
            "company": "mi",
            "__v": 0
        },     
        ...
       ]
  }
```

Select Specific properties of Products      
Select specific propeties like name, company name, price etc 

Endpoint:  
GET ```/api/products/?select=name,company```

Response:  
```json
{
    "Products": [
            {
            "_id": "6478e7489e2b2d348b22f974",
            "name": "iphone12",
            "company": "apple"
        },
        {
            "_id": "6478e7489e2b2d348b22f973",
            "name": "iphone",
            "company": "apple"
        },
        {
            "_id": "6478e7489e2b2d348b22f977",
            "name": "dell xps",
            "company": "dell"
        },    
        ...
       ]
  }
```

