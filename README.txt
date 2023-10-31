After cloning 
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


