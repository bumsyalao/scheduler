#  Scheduler task

### Key Application Features 🚀

A user can perform the following: 
- SignUp with or without roles ['staffUser', 'admin']
- SignIn
- User can view his/her schedule for any period of time (up to 1 year).
- User can see his/her coworker schedules
- Admin User can edit/delete all users
- Admin User can create/edit/delete schedule for users. 

##### Authentication: Users are authenticated and validated using JsonWebToken.


### Development 🛠
This application was developed using NodeJs with Express for routing. MySql was used for persisting data.

### Installation 📲

- Clone the project repository.
- Run git clone``` git clone https://github.com/bumsyalao/dataminr.git ```
- Run ``` yarn install ``` to install the dependencies in the package.json file.
- Update .env with envexample
- Create Mysql database 
- Build docker container, on project root run ``` docker-compose up --build -d  ``` 
- ``` docker logs task-app ```
- Start app ```yarn start app ```
- Run test ```yarn test```

### Technologies Used ⚙️

- JavaScript (ES6) (http://es6-features.org/)
- Node.js (https://nodejs.org/en/)
- Express (https://www.npmjs.com/package/express-api)
- Mysql (https://www.mysql.com/)
- Docker (https://www.docker.com/)

### Limitations
+ Users cannot craete bulk schedules.

### Later To-Do
+ Add test cases
+ Add API documentation

## Author 👩🏽‍💻
Bunmi Alao