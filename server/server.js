const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const logIn = require("./controllers/login");
const signin = require("./controllers/signup");
const accessToken = require("./controllers/accessToken");
const loginSuccess = require("./controllers/loginSuccess");
const logout = require("./controllers/logout");
const refreshToken = require("./controllers/refreshToken");

app.use(cors());
app.use(express.json());

app.post("/api/login", login);

app.post("/api/signup", singup);

app.listen(8000);
