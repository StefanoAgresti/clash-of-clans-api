Live Demo of the project.

[Click here](https://clash-of-clans-api-1.onrender.com/)

https://github.com/user-attachments/assets/ea5b2884-2fe3-4b36-8ffc-f25fe68b50b1

# Project Overview

This README provides information on how to install dependencies, start the project, and obtain the necessary API key to run the project.

## Installing Dependencies

To install the dependencies for both the backend and frontend, follow these steps:

### Backend Dependencies

Navigate to the `backend` directory and run the following command:

```
npm install
```

This will install all the dependencies listed in the `package.json` file.

### Frontend Dependencies

Navigate to the root directory of the project (outside of the `backend` directory) and run the following command:

```
npm install
```

This will install all the dependencies required for the Angular frontend.

## Starting the Project

To start the project, you need to start both the backend and frontend servers.

### Starting the Backend Server

Navigate to the `backend` directory and run the following command:

```
npm run dev
```

This will start the backend server using Nodemon, which will automatically reload the server when changes are made to the files.

### Starting the Frontend Server

Navigate to the root directory of the project (outside of the `backend` directory) and run the following command:

```
ng serve
```

This will start the Angular development server, which will serve the frontend application.

## Obtaining the API Key

To obtain the API key necessary for the project, follow these steps:

### Step 1: Create an account on Clash of Clans API

Go to [Clash of Clans API](https://developer.clashofclans.com/#/) create an account and follow the instructions.

### Step 2: Create a new API key

Log in to your account then click the username in the top right of the page and go to "My Account".
Click "Create New Key", your ip address is required.

### Step 3: Copy the API key

Copy the API key that is generated. You will need this key to use the Clash of Clans API in your project.

### Step 4: Add the API key to your project

Create a new file named `.env` in the `backend` directory of your project following the .env.example file provided:

```
COC_API_TOKEN = your_api_key
```

Replace `your_api_key` with the API key you copied in step 3.

## Using the API Key

Once you have obtained the API key and added it to the `.env` file, restart the backend server to be able to make requests to the Clash of Clans API.
