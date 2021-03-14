// create an express app
const express = require("express")
const app = express()
var path = require('path');

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/test", function (req, res) {
  res.sendFile(path.join(__dirname + '/app/main/page.html'))
});

app.get("/bg", function (req, res) {
  res.sendFile(path.join(__dirname + '/app/main/bg.jpg'))
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));