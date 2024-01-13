# Epinet Project

## Introduction

Epinet is a project that combines a React-based web application with a backend API powered by Pocketbase.

## Getting Started

To run the project, you have two options: using Docker or running it without Docker.

### Using Docker

1. Make sure you have Docker installed on your machine.
2. Open a terminal and navigate to the project root directory.
3. Run the following command to build and start the containers:
   ```bash
   docker-compose up
4. Access the web application at [localhost:8081](http://localhost:8081).
5. Access the Pocketbase API and database at [localhost:8090](http://localhost:8090/_/).

### Without Docker

1. Make sure you have [Node.js](https://nodejs.org/en) and [Yarn](https://yarnpkg.com/) installed on your machine.

2. Open a terminal and navigate to the `web` directory.

3. Run the following commands to start the web application:

    ```bash
    cd web
    yarn install --production=false
    yarn cache clean
    yarn start

4. Access the web application at [localhost:3000](http://localhost:3000).

5. Open another terminal and navigate to the backend directory.
 
6. Run the following command to start the Pocketbase API:

    ```bash
    cd backend
    ./pocketbase.exe serve

7. Access the Pocketbase API and database at [localhost:8090](http://localhost:8090/_/).

## Project Structure

The project is divided into two main directories: `web` and `backend`.

### Web

The `web` directory contains the React-based web application. It is structured as follows:

- ...

### Backend

The `backend` directory contains the Pocketbase API and database. It is structured as follows:

- ...