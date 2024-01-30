# Full-stack project with GraphQL, Express, MongoDB, React, and Apollo.

## To start, follow the instructions:

1. Clone the repository:
+ `git clone git@github.com:matenka-andrii/fullstack-project.git`

2. Change into the project directory:
+ `cd fullstack-project`

3. Install dependencies:
+ `npm install`

4. Create a `.env` file in the root directory of the project with the following contents:
+ `MONGODB_URL=mongodb://mongo:mongo@localhost:27017`
+ `PORT=5000`

5. Start the Docker containers (Note: You must have the Docker Desktop application installed on your system):
+ `docker compose up -d`

6. Start the server:
+ `npm run start:dev`

After completing the above steps, the server should be running and accessible at http://localhost:5000.

7. Change into the client directory:
+ `cd client`

8. Install client dependencies:
+ `npm install`

9. Start the client application:
+ `npm run start`