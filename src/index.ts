import express from "express";
import bodyParser from "body-parser";
import router from "./server/routes/index";
import session from 'express-session';
import dotenv from "dotenv";

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router)

app.listen(port);


