import express from "express";
import bodyParser from "body-parser";
import router from "./server/routes/index";
import session from 'express-session';

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT);


