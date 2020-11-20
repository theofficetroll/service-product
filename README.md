# Product-API

GET
/products/all/:limit
returns a JSON object of product information for all items

GET
/product/:id
returns a JSON object of product information for item with given id

POST
/product/:id
adds a new product to database with included information

PUT
/product/:id
updates information in database for given id with included information

DELETE
/product/:id
removes given id from the database


# Product-Postgres Database
In Postgres shell:

\copy products from /path/to/csv/seed.csv delimiter ',' csv header;

\copy products from /home/mark/hackreactor/rpt23/product-service/seed.csv delimiter ',' csv header;