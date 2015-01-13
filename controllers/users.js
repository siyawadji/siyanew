var usersModel=require('../models/Users');

exports.getUsers=function()
{
    return usersModel.users;
}

exports.getUser=function(id){
    for(var i=0; i<usersModelusers.length; i++){
        if(usersModel.users[i].id==id)
            return usersModel.users[i];
    }
}

exports.compareAuth=function(username,password){
    for(var i=0; i<usersModel.users.length; i++)
    {
        if(usersModel.users[i].username==username && usersModel.users[i].password==password)
        {
            return usersModel.users[i];
            //return true;
        }
    }
    return false;
}

exports.postlogin=function(request,response){
    var result=users.compareAuth(request.body.email, request.body.password)
   if(result)
   {
        response.send("Sign in successful. Hi "+result.name);       
   }
    else
    {
        response.send("Failed");
    }

}