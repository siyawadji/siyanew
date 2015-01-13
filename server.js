var express=require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-parser');
//user model
var usersController=require('./controllers/users');
var app=express(); //creates a server

app.set('views', path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html', hbs.__express);
app.use(bodyParser());   //optional line...this line is divided into next to line
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
    }));

app.use(express.static('public'));

//routes
app.get('/',function(request,response){
        response.render('index',{        //json format
            title:"Home",
            users:usersController.getUsers
        });
});

app.get('/users/:id',function(request,response){
    var user=usersController.getUser(request.params.id);
    response.render('profile',{
        title:"User Profile",
        user:user
    });
});

app.get('/login',function(request,response){
        response.render('Login',{
            title:"Login"
        });
});

app.get('/signup',function(request,response){
        response.render('signup',{
            title:"Signup"
        });
});

app.get('/about',function(request,response){
        response.render('about',{
            title:"About"
        });
});

app.get('/login', usersController.postlogin)

app.listen(3000);