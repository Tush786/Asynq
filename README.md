# MERN Task Manager APP

A MERN application for basic tasks management.
<h1>Demo user and password to check fuctionality</h1>
<h3>Email: tusharsapate34@gmail.com</h3>
<h3>Pass: Tushar@123</h3>

<h1>Login/Signup Page</h1>
<a href="https://ibb.co/VBwpjnH"><img src="https://i.ibb.co/s3WJmx5/Login.png" alt="Login" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />
<a href="https://ibb.co/vz4b220"><img src="https://i.ibb.co/ThMZzz9/Login-M.png" alt="Login-M" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />



<h1>Task Page</h1>
<a href="https://ibb.co/mSXVJ9V"><img src="https://i.ibb.co/nRnNr7N/SC-H.png" alt="SC-H" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />
<a href="https://ibb.co/xFRmT1V"><img src="https://i.ibb.co/sWM5YKL/SC-Lap-edit.png" alt="SC-Lap-edit" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />

<a href="https://ibb.co/34f5tXL"><img src="https://i.ibb.co/Qp87sB1/Addtask-form.png" alt="Addtask-form" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />

<a href="https://ibb.co/QrV8cJ7"><img src="https://i.ibb.co/SRgQx6D/Profile.png" alt="Profile" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />

<a href="https://ibb.co/x5dhs4L"><img src="https://i.ibb.co/zfDs5kx/Full-des.png" alt="Full-des" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />

<a href="https://ibb.co/L95Dh8t"><img src="https://i.ibb.co/tYXwP4s/SC-M-H.png" alt="SC-M-H" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>facebook photos public</a><br />

<h1>User Profile</h1>
<a href="https://ibb.co/mzVpCBn"><img src="https://i.ibb.co/ThxyBTQ/Profile.png" alt="Profile" border="0"></a><br /><a target='_blank' href='https://usefulwebtool.com/convert-text-to-binary'>binary to words converter</a><br />

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features

- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- No external CSS files needed (made using Tailwind CSS)
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Chakra Ui
- Node.js
- Express.js
- React
- Redux
- Mongodb
- Firebase Authentication (Oauth)

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- react-icon
- Chakra ui
- Tailwind Css

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB/Atlas database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application

   ```sh
   npm run start
   ```

4. Go to http://localhost:3000 -- Frontend Local Server
5. Got to http://localhost:9911 --- Backend Local Server

## Backend API

<pre>
- POST     /user/addUser
- POST     /user/login
- GET     /user
- PATCH    /user/editUser/:id
- GET      /task/getTask
- GET      /api/tasks/:taskId
- POST     /api/createTask
- GET    /api/getTaskbyId/:id
- PATCH      /api//updatetask/:id
- DELETE   /api//deleteTask/:id
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /TaskComp/Task.jsx      Add new task
- /TaskComp/Taskitem.jsx     Get All task
- /TaskComp/TaskCard.jsx     Display All task.
</pre>

## npm scripts

At root:

- `npm run start`: Starts frontend
- `npm run server`: Starts only backend
- `nodemon index.js`: Starts local server of backend
- `npm run install-all`: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.

Inside frontend folder:

- `npm start`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder

Inside backend folder:

- `npm run server`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

## Useful Links

- This project

  - Github Repo: https://github.com/Tush786/GreenMentor-Ass
 
   <h3> Back end github url</h3>
  - https://github.com/Tush786/pabblybackend

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world

- Download links

  - Nodejs download: https://nodejs.org/
  - VS Code download: https://code.visualstudio.com/

- Cheatsheets
  - Git cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf
  - VS Code keyboard shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
  - CSS Selectors Cheatsheet: https://frontend30.com/css-selectors-cheatsheet/

## Contact

- Email: tusharsapate34@gmail.com.com
- Linkedin: https://www.linkedin.com/in/tushar-sapate/
