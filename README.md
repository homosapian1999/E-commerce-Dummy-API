# Dummy API Repository

This repository contains a dummy API built with Node.js and MongoDB. It serves as a basic template or starting point for developing APIs using these technologies.

## Prerequisites

Before you can run the API locally, ensure that you have the following installed:

- Node.js (v12 or higher)
- MongoDB (v4 or higher)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/dummy-api.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd dummy-api
   ```

3. Install the dependencies using npm:

   ```bash
   npm install
   ```

4. Configure the MongoDB connection:

   - Open the `config.js` file located in the `config` directory.
   - Replace the `DB_CONNECTION_STRING` with your MongoDB connection string.

## Usage

To start the API server, run the following command:

```bash
npm start
```

The API will start running at `http://localhost:3000`. You can test the endpoints using a tool like Postman or cURL.

## Endpoints

The API provides the following endpoints:

- `GET /api/users`: Retrieves all users.
- `GET /api/users/:id`: Retrieves a specific user by ID.
- `POST /api/users`: Creates a new user.
- `PUT /api/users/:id`: Updates an existing user.
- `DELETE /api/users/:id`: Deletes a user.

