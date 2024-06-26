# DockerReact

## Description
This repository contains the setup for Dockerizing a React frontend application (Client) and a Node.js backend server (Server). The Client application is built using Vite, a modern build tool for web development, while the Server application utilizes Express.js.

## Client Dockerization
To Dockerize the Client application:
1. Build the Docker image:
    ```
    docker build -t react-vite-flyio .
    ```
2. Run the Docker container:
    ```
    docker run -p 8080:8080 -d react-vite-flyio
    ```

## Server Dockerization
To Dockerize the Server application:
1. Build the Docker image:
    ```
    docker build -t react-vite-flyio-server .
    ```
2. Run the Docker container:
    ```
    docker run -p 5000:5000 -d react-vite-flyio-server
    ```

## Directory Structure

```
DockerReact/
│
├── react-vite-flyio/ # Client application directory
│ ├── dashboard/ # Dashboard component
│ ├── login/ # Login component
│ ├── home/ # Home component
│ ├── registration/ # Registration component
│ ├── <other_files> # Other files and directories related to the React Client
│ └── Dockerfile # Dockerfile for building the Client image
│
└── server/ # Server application directory
├── controllers/ # Controllers for handling business logic
│ └── auth-controller.js # Authentication controller
│
├── models/ # Models for defining MongoDB schemas
│ └── user-model.js # User model
│
├── routers/ # Routers for defining API endpoints
│ └── auth-router.js # Authentication router
│
└── utils/ # Utility functions or modules
└── db.js # Database utility for connecting to MongoDB

```