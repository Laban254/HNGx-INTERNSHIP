## RESTful Person API
This project aims to develop a simple REST API capable of CRUD (Create, Read, Update, Delete) operations on a "person" resource, interfacing with a chosen database system. The API also dynamically handles parameters, enabling actions based on a person's name. 

## REST API Development
- **CREATE:** Add a new person at the endpoint  => **/api**
- **READ:** Fetch details of a person using the endpoint  => **/api/user_id**
- **UPDATE:** Modify details of an existing person via the endpoint  => **/api/user_id**
- **DELETE:** Remove a person using the endpoint  => **/api/user_id**

##  ♉ Local Setup and Deployment
### Prerequisites:
- Node.js and npm installed on your computer.
- MongoDB installed and running locally (or you can use a cloud-hosted MongoDB service).

[API Endpoint](https://hngx-internship-rest-api.onrender.com/api/persons)

## 🔁 Steps:
### 1 Clone the Repository:
Clone your API project repository from GitHub or any other version control platform.
```
git clone https://github.com/Laban254/HNGx-INTERNSHIP/tree/main/STAGE-2
cd STAGE-2
```
### 2 Install Dependencies:
Install the necessary Node.js dependencies
```
npm install
```
### 3 Configure Environment Variables:
Create a .env file in the root of your project to store sensitive information such as database connection details, API keys, and other configuration options. Add your MongoDB connection string and any other required environment variables.
```
MONGODB_URI=mongodb://localhost:27017/your-database-name
PORT=3000
```
### 4 Database Configuration:
Ensure that your MongoDB server is running. Update the MongoDB connection URI in your application code to use the MONGODB_URI environment variable set in your .env file.
### 5 Start the API:
Start your API server using the following command:
```
npm run dev
```
### 6Test the API:
Test using tools such as Postman  and Curl


