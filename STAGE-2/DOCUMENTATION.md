# API Documentation   & UML Diagram

## Introduction

Welcome to the official documentation for our API. This guide provides comprehensive information on API endpoints, request and response formats, sample usage scenarios and  known limitations.

## Standard Request and Response Formats

# ☸️ Requests

## Create a New Person

- **Endpoint:** `POST /api/`
- **Request Body (JSON):**
  ```json
  {
    "name": "Laban KIbet",
    "age": 25,
    "gender": "Male"
  }
  ```

## Get a Person by ID

**Endpoint:** `GET /api/:user_id`

### Update a Person's Profile

**Endpoint:** `PUT /api/:user_id`

**Request Body (JSON):**

```json
  {
    "name": "Updated Name",
    "age": 35
  }
```
## Delete a Person by ID

**Endpoint:** `DELETE /api/:user_id`

# ☯️ Responses

#### Success Response (HTTP Status 200)

**Response Body (JSON) for GET requests:**
```json
{
  "_id": "12345",
  "name": "Laban Kibet",
  "age": 25,
  "gender": "Male",
  "createdAt": "2023-09-12T12:00:00.000Z",
  "updatedAt": "2023-09-12T14:30:00.000Z"
}
```

#### Error Response (HTTP Status 400)

**Response Body (JSON):**
```json
{
  "error": "Invalid request data"
}
```

# ☮️ Sample Usage
## Create a New Person
**Request:**

```
POST /api/
Content-Type: application/json
```
```json
{
  "name": "Laban KIbet",
  "age": 25,
  "gender": "Male"
}
```
### Response (HTTP Status 200):
```json
{
  "_id": "12345",
  "name": "Laban Kibet",
  "age": 25,
  "gender": "Male",
  "createdAt": "2023-09-12T12:00:00.000Z",
  "updatedAt": "2023-09-12T12:00:00.000Z"
}
```

## Get a Person by ID
### Response (HTTP Status 200):
```json
{
  "_id": "12345",
  "name": "Laban KIbet",
  "age": 25,
  "gender": "Male",
  "createdAt": "2023-09-12T12:00:00.000Z",
  "updatedAt": "2023-09-12T12:00:00.000Z"
}
```

## Update a Person's Profile
### Request:
```PUT /api/12345
Content-Type: application/json
```

```json
{
  "name": "Updated Name",
  "age": 35
}
```
### Response (HTTP Status 200):
```json
{
  "_id": "12345",
  "name": "Updated Name",
  "age": 35,
  "gender": "Male",
  "createdAt": "2023-09-12T12:00:00.000Z",
  "updatedAt": "2023-09-12T14:30:00.000Z"
}
```
## Delete a Person by ID
### Request:
```
DELETE /api/12345
```
### Response (HTTP Status 200):

```json
{
  "_id": "12345",
  "name": "Updated Name",
  "age": 35,
  "gender": "Male",
  "createdAt": "2023-09-12T12:00:00.000Z",
  "updatedAt": "2023-09-12T14:30:00.000Z"
}
```
## Known Limitations and Assumptions
- This API assumes that all requests and responses are in JSON format.
- The API assumes the use of a MongoDB database for storing person data.
- Error responses are standardized but may not cover all edge cases.

## UML Diagram

```plaintext
+-------------------------+
|       userController       |
+-------------------------+
|                         |
|                         |
|                         |
|                         |
| +---------------------+ |
| |   userController   | |
| +---------------------+ |
| | + creatPerson()    | |
| | + getPerson()      | |
| | + updatePerson()   | |
| | + delPerson()      | |
| |                     | |
| +---------------------+ |
|                         |
|                         |
+-------------------------+
      |           ^
      |           |
      v           |
+-------------------------+
|     personModel (M)     |
+-------------------------+
|                         |
|                         |
|                         |
| +---------------------+ |
| |      personSchema   | |
| | + name: String     | |
| | + age: Number      | |
| | + gender: String   | |
| |                     | |
| +---------------------+ |
|                         |
|                         |
+-------------------------+
      |           ^
      |           |
      v           |
+-------------------------+
|       Express Routes    |
+-------------------------+
|                         |
|                         |
|                         |
| +---------------------+ |
| |   Express Router    | |
| | + POST /            | |
| | + GET /:user_id     | |
| | + PUT /:user_id     | |
| | + DELETE /:user_id  | |
| |                     | |
| +---------------------+ |
|                         |
|                         |
+-------------------------+

