require("dotenv").config();

const express = require("express");
const app = express();

const sequelize = require("./db");

sequelize.sync(); //to drop tables use { force: true}
app.use(express.json());

//Middleware import
app.use(require("./middleware/headers"));

//controllers
const user = require("./controllers/usercontroller");

//Routes

app.use("/auth", user);

app.listen(3003, () => console.log("app is destroying all humans on 3003"));
