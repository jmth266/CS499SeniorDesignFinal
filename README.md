# CS499SeniorDesignFinal
Final Senior Design Repository

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm: (Node Package Manager) typically comes with Node.js installation.
- 
To run this code start by navigating into the directory that contains the code

You'll want to make sure you have npm installed. To do that type 
  ```bash
  npm install
  ```
Then you'll want to type 
  ```bash
npm run dev
  ```
This should begin the Calculator in a local host window.


## Here is the entire README from the original team:

# Delta-V Calculator

This README will guide you on how to set up and run the project.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm: (Node Package Manager) typically comes with Node.js installation.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/mfp426/SeniorDesign499MobileCalc1.git
   ```

    OR 

    Download the zip from the GitHub Repo

2. Navigate to the project directory:
   ```bash
   cd your-vite-react-app
   ```
   
    OR
   
   ```bash 
   cd SeniorDesign499MobileCalc1
   ```
   
3. Install project dependencies:
   
   ```bash
    npm install
   ```
   
## (Optional) Setting up the Database

This section was given the optional tag, as this setup process depends on whether there has already been an established database with all the necessary information. If this is true, this section can be ignored. If the opposite is the case, then it’s important to perform the following steps:

1. Download and unpack the MongoDB dump folder from [Google Drive.](https://drive.google.com/file/d/1D6YAEzoTbkU3O167Fg6YnngFIVpNDhQS/view?usp=sharing)

2. Install [MongoDB Compass.](https://www.mongodb.com/try/download/compass)

3. Open MongoDB Compass and create a new connection.
   - Make sure the URI matches the IP address of the intended hosting location.

4. After connecting, locate the “Databases” tab on the left and select “Create database.”
   - The name of the database doesn’t impact functionality, but it’s recommended to set it per the theme of the project/information being stored.

5. Once the database is created, locate the database on the left and select “Create collection.” Set the name of the collection to match one of the files in the MongoDB dump folder. 
   - Repeat this process until all file names in the dump folder have been added as collections in MongoDB compass.

6. After all collections have been made, go to each collection and perform the following steps:
   - Locate the “ADD DATA” button and select “Import JSON or CSV File.”
   - Find and import the file in the MongoDB dump folder that matches the name of the collection.
   - Repeat the process until all collections have been filled.

## Configure/verify the database connection

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Open the "index.js" file in this directory with your preferred text/code editor.

3. Navigate to line 10 in the file to find the following statement:
   ```bash
   const db_address = ‘mongodb://db_ip/db_name’;
   ```

4. Fill out the following fields accordingly:
   - In the "db_ip" field, ensure that the IP address and port where the database is hosted are recorded properly. 
   - In the "db_name" field, ensure that the name of the database being pulled from is entered properly (names are case-sensitive).

## Application Operation and Testing

1. Running the App

    To start the development server, run:
   
   ```bash
    npm run dev
   ```
   
2. Building for Production

   To build the app for production, run:

   ```bash
   npm run build
   ```
   
3. Unit Testing:

   ```bash
   npm run test
   ```

## Searching the Database

   1. Use the dropdown menu on the right side of the Navbar to select a make, model, year, and trim from the database. 
   
   2. Upon selecting a trim, the selected car will be pulled from the DB and stored inside a top-level context that can be accessed in code from any component of the calculator.
   










# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


