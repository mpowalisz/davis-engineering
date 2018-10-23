var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.port || 3000;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);

app.listen(PORT);
console.log("App listening on port: " + PORT);
