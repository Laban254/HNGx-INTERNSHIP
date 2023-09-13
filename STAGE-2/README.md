# About this API

This API is designed to manage and interact with a collection of user information in a MongoDB database. It provides basic CRUD (Create, Read, Update, Delete) operations for user records. The API is built using Node.js, Express.js, and Mongoose for MongoDB interaction.
[API Endpoint](https://hngx-internship-rest-api.onrender.com/api/persons)

## Features

- **Create User:** Allows you to create a new user by providing their name, age, and gender.

- **Get User:** Retrieves user information by their unique ID.

- **Update User:** Updates user information by their unique ID.

- **Delete User:** Deletes a user record by their unique ID.

## Usage

To use this API, you can make HTTP requests to the following endpoints:

- `POST /api/`: Create a new user by providing name, age, and gender in the request body.

- `GET /api/:user_id`: Get user information by providing the user's ID as a parameter.

- `PUT /api/:user_id`: Update user information by providing the user's ID as a parameter and the updated data in the request body.

- `DELETE /api/:user_id`: Delete a user by providing their ID as a parameter.

## Getting Started

1. Ensure you have Node.js and MongoDB installed on your system.

2. Clone the repository and navigate to the project directory.

3. Install the dependencies using `npm install`.

4. Start the application using `npm start`.

5. The API will be accessible at `http://localhost:<port>/api/`, where `<port>` is the port number specified in your environment.

## Dependencies

- Node.js: A JavaScript runtime environment.
- Express.js: A web application framework for Node.js.
- Mongoose: A MongoDB object modeling tool.

## Author

This API was created by [Laban Kibet](https://github.com/Laban254).

Feel free to explore the API and use it to manage user records in your application.






