# Book_Management_App_NodeJS
Book Management Application based on NodeJS and MongoDB

# APIs CURL & Details
1. View a list of all books.
        curl -X 'GET' \
        'http://localhost:5000/getAllBooks' \
        -H 'accept: application/json'
    Description:- This API gets all the book data from Database

2. View details of specific book by it's ID
        curl -X 'GET' \
        'http://localhost:5000/getBookById?BookID=6540a4ca6f75ce25da9c8419' \
        -H 'accept: application/json'
    Description:- This API gets the specific book from database based on Unique ID

3. Add New Book
        curl -X 'POST' \
        'http://localhost:5000/addNewBook' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -d '{
        "Title": "Book Title",
        "Author": "Author Name",
        "Summary": "Book Summary"
        }'
    Description:- This API adds a new book in Database

4. Update Book Details
        curl -X 'PUT' \
        'http://localhost:5000/updateBookById?BookID=6541047ac409895efaf6729b' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -d '{
        "Title": "Book Title 2",
        "Author": "New Author Name",
        "Summary": "Book Summary 2"
        }'
    Description:- This API updates the details of existing book in Database

5. Delete Book Details
        curl -X 'DELETE' \
        'http://localhost:5000/deleteBookById?BookID=6541047ac409895efaf6729b' \
        -H 'accept: application/json'
    Description:- This API delete the existing book in Database


# Instruction After cloning Repo 
1. Open Terminal and Run npm i

2. Setup MongoDB Atlas 
    Create Cluster with your choice Name
    Create DB with name Book_Management_DB
    Give Collection Name Book_App
    Setup Mongo Shell in desktop if needed. (Creating PATH)
    Click on connect and Copy Connection String (We need it to paste in .env later)

3. Create .env file for local Run

4. Add below details in .env file
    PORT = <Port Number>
    SWAGGER_HOST=localhost:<Port Number>
    # PORT and SWAGGER_HOST should be same.0

    MONGODB_CONNECTION_STRING = <MongoDB Connection String>

5. Run command in Terminal
    npm start

6. Go to http://localhost:<Port Number>/api-docs/#/

7. Perform CRUD Operations


