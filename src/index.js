let express =require("express");
let bodyParser = require("body-parser");
let router = require("./server/routes/index");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT);


