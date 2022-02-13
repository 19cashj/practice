var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({"message": "HELLO JSON"})
  }
  else {
    res.json({"message": "Hello json"})
  }
})

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({time: req.time});
});

app.get('/:word/echo', function(req, res, next) {
  res.json({"echo": req.params.word})
})

app.route('/name').get(function(req, res, next) {
  console.log(req.query);
  res.json({"name": `${req.query.first} ${req.query.last}`})
}).post(function (req, res, next) {
  res.json({"name": `${req.body.first} ${req.body.last}`})
});

app.use("/public", express.static(__dirname + "/public"));

 module.exports = app;