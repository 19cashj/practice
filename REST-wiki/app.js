const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
};
const Article = mongoose.model("Article", articleSchema);

//All articles
app.route('/articles')
    .get(function(req, res) {
        Article.find(function(err, results) {
            if (!err) {
                res.send(results);  
            }
            else {
                res.send(err);
            }
        })
    })
    .post(function(req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })
        newArticle.save(function(err) {
            if (!err) {
                res.send("OK")
            }
            else {
                res.send(err);
            }
        })
    })
    .delete(function(req, res) {
        Article.deleteMany(function(err) {
            if (!err) {
                res.send("OK");
            }
            else {
                res.end(err);
            }
    });
})

//Individual Article using body parameters
app.route("/articles/:title")
    .get(function(req, res) {
        Article.findOne({title: req.params.title}, function(err, article) {
            if(article) {
                res.send(article);
            }
            else {
                res.send("No articles have been found.")
            }
        })
    })
    .put(function(req,res) { //For changing all fields
        Article.updateOne({title: req.params.title}, 
        {title: req.body.title, content: req.body.content}, 
        function(err) {
            if (!err) {
                res.send("OK");
            }
            else {
                res.send(err);
            }
        })
    })
    .patch(function(req,res) { //For changing only some fields
        Article.updateOne({title: req.params.title}, 
            {$set: req.body}, 
            function(err) {
                if (!err) {
                    res.send("OK");
                }
                else {
                    res.send(err);
                }
        })
    })
    .delete(function(req, res) {
        Article.deleteOne({title: req.params.title}, 
            function(err) {
                if (!err) {
                    res.send("OK");
                }
                else {
                    res.send(err);
                }
        })
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});