# user-authentication-app
The application implements the login page for the user.
- Restful API for user authentication using node.js express framework & typeScript.
- Used express-session to authenticate the user
- Used mocha-chai framework to add test cases for the backend.
- Used swagger-ui-express to generate API documentation.

# Application URL

https://user-authentication-nodeapp.herokuapp.com/home

API documentation swagger - https://user-authentication-nodeapp.herokuapp.com/docs/

# How to Run?

##### npm install 
To download all the dependencies specified in package.json
##### npm run dev
To build and start the application at PORT 3000
##### npm test
To run test cases for testing the rest API.

### Docker

- Go to the root directory and run the following command to build the Docker image.

   ``` docker build -t priyankathapliyal/user-authentication-app . ```

- To run the image that was previously built.

   ```docker run -p 49160:8080 -d priyankathapliyal/user-authentication-app```

- Test the application at ```http://localhost:49160/home``` on the host machine.

<img src="https://user-images.githubusercontent.com/21034174/111730877-522cb400-8898-11eb-9f18-b46c58584e44.png" width="250" height="150">



# Improvement Scope

- Authentication implementation can be further improved to invalidate sessions and logout from the application.
- Username and Passwords interactions should be via Databases and passwords should be shared via Hashing Mechanism to secure them.
- Currently for authentication, we are storing sessions in local. But for production scenarios with multiple servers involved, we will have to move to Redis store.
- Test cases to include more coverage.
