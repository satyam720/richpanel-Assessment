
In the frontend branch, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

In the backend branch, you can run:
### `npm start`
backend runs at port 8000

Database is located at: 
DATABASE=mongodb://localhost:27017/richpanel


This app is made using React for frontend framework.
The express serves as backend server and mongoose is used for storing data.
Currently it contains only three pages Register, Login and Fb connect.
Registration and login are fully functional and this app also supports password encryption as it uses bcrypt for hashing password.
It has various validators which allow only registered users to login.
