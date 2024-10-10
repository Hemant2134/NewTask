# User Management App

This is a user management application built with React, Node.js, Express, and MongoDB. It allows users to register, log in, and manage user data (read, update, delete).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)


## Getting Started

Use these steps as there is no node_modules and .env file and these help in having them.
Follow these instructions to set up and run the project.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or accessible remotely.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/user-management-app.git
   cd user-management-app
Set Up the Server

2.Navigate to the server directory:
cd server
Install dependencies:
npm install
Create a .env file in the server directory to store environment variables:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

3.Set Up the Client
Navigate back to the main project directory and then to the client directory:
cd ../client
npm install

4.Navigate to the server directory , Start the Server and run:
node server.js
The server should be running on http://localhost:5000.

5.Open a new terminal, navigate to the client directory, Start the Client  and run:
npm start
The React application should open in your browser at http://localhost:3000.
