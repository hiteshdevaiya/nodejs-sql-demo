## Application Overview

This repository for everyone.

## Software Requirements

- [Node](https://nodejs.org/en/download/)
- [ExpressJS](https://www.npmjs.com/package/express)
- [phpMyAdmin](https://www.phpmyadmin.net/)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "nodejs-sql-demo.git" to your project name.

```bash
git clone https://github.com/hiteshdevaiya/nodejs-sql-demo.git ./nodejs-sql-demo.git
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd nodejs-sql-demo.git
npm install && npm update
```

### IMPORTING DATABASED USING PHPMYADMIN

```bash
Take a sample databse hear and import using your databse tool _backup/database/ndejs-demo.sql
```

### Setting up environments

1.  You will find a file named `.env` on config directory of project. which is used for constants define and enviroment purpose as well.

## Project structure

```sh
.
├── app.js
├── .env
├── README.md
├── routes.js
├── package.json
├── _backup
│   ├── database
│   │   ├──nodejs-demo.sql
│   └── api-collection
│       ├──nodejs-sql-demo.postman_collection
└── app
    ├── controllers
    │   └── user.controller.js
    ├── helpers
    │   ├── auth.helper.js
    │   └── common.helper.js
    ├── lib
    │   ├── db.js
    │   └── lib.user.js
    ├── validation
    │   └── user.validation.js
    └── routes
        └── user.routes.js

```

## How to run

### Running API server locally

```bash
nodemon app.js
```
