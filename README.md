Authentication and Authorization System with RBAC
This is a Node.js-based authentication and authorization system implemented using Express.js and MongoDB. The system includes JWT-based authentication and Role-Based Access Control (RBAC), ensuring secure user management and restricted access to resources based on roles.

Features
User Registration: Users can register with a username, password, and role.
User Login: Users log in and receive a JSON Web Token (JWT) for authentication.
Protected Routes: Access to routes is restricted based on user roles:
Admin-only routes.
Routes accessible by both Users and Moderators.
Role-Based Access Control (RBAC): Controls access to resources based on user roles.
Password Hashing: User passwords are securely hashed using bcryptjs.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
bcryptjs
jsonwebtoken
dotenv



Setup Instructions
1. Prerequisites
Ensure you have the following installed:

Node.js
MongoDB
2. Clone the Repository
bash
Copy code
git clone <repository-url>
cd <repository-name>
3. Install Dependencies
bash
Copy code
npm install
4. Configure Environment Variables
Create a .env file in the root directory and add the following variables:

plaintext
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1d
5. Populate the Database (Optional)
Run the script to add dummy users for testing:

bash
Copy code
node addDummyUsers.js
How to Run
Start the server:

bash
Copy code
node app.js
The server will run on http://localhost:3000.

API Endpoints
Authentication
1. Register
Endpoint: POST /api/auth/register
Description: Registers a new user.
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "password": "examplePassword",
  "role": "User"
}
Roles: Admin, User, Moderator
2. Login
Endpoint: POST /api/auth/login
Description: Logs in a user and returns a JWT.
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "password": "examplePassword"
}



Protected Routes
1. Admin Route
Endpoint: GET /api/protected/admin
Access: Only accessible to users with the Admin role.
Authorization Header:
plaintext
Copy code
Authorization: Bearer <token>
2. User/Moderator Route
Endpoint: GET /api/protected/user
Access: Accessible to users with the User or Moderator roles.
Authorization Header:
plaintext
Copy code
Authorization: Bearer <token>
Testing the System
Using Postman
Register Users:

Register users with roles like Admin, Moderator, and User.
Login Users:

Obtain JWT tokens for each user.
Access Protected Routes:

Test access to /api/protected/admin and /api/protected/user with different tokens.
Directory Structure
bash
Copy code
.
├── app.js
├── .env
├── models
│   ├── User.js
├── middleware
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
├── routes
│   ├── authRoutes.js
│   ├── protectedRoutes.js
├── addDummyUsers.js
├── package.json
├── README.md
Future Enhancements
Add token refresh functionality.
Implement email verification for registration.
Add rate-limiting and logging for enhanced security.
License
This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

