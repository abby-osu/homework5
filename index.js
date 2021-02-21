const express = require('express');

const app= express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.use(express.json())
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5207);
app.use(express.urlencoded({
    extended: true
  }))



app.get('/',function(req,res){


    let data= {
        title: "GET Request Received",
        data:req.query
    }
    res.render('home.handlebars', data) //We can omit the .handlebars extension as we do below
});

app.post("/", function(req, res){
    console.log(req.query);
    console.log(req.body);

    let data= {
        title: "POST Request Received",
        data:req.query,
        body:req.body
    }
    res.render('post.handlebars', data) //We can omit the .handlebars extension as we do below
})

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});









