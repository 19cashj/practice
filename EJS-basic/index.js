const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public"));

app.get("/", function(req,res) {
    res.render('list', {title: date.day(), items: items});
})

app.post("/", function(req, res) {
    if (req.body.button === "Work") {
        workItems.push(req.body.item);
        res.redirect("/work");
    }
    else {
        items.push(req.body.item);
        res.redirect("/");  
    }
});

app.get("/work", function(req,res) {
    res.render('list', {title: "Work", items: workItems});
})

app.get("/about", function(req,res) {
    res.render('about');
})


app.listen(3000, function() {
    console.log("Server started on port 3000")
})