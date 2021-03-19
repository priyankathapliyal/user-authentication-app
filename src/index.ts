import express from "express";
import bodyParser from "body-parser";
import router from "./server/routes/index";
import session from "express-session";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors"
import path from 'path';

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Express API for user login',
		version: '1.0.0',
		description: 'Restful API for user authentication using node.js express framework.',
		contact: {
			name: 'Priyanka Thapliyal'
		},
	},
	servers: [
		{
			url: 'http://localhost:3000',
			description: 'Development server',
		},
	],
};

const options = {
	swaggerDefinition,
	apis: ["**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(cors())

// initialize configuration
dotenv.config();

const port = process.env.PORT || 3000;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../public/ng-user-authentication')));

app.use("/", router)

app.listen(port);

export default app;

