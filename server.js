var express = require('express');
//access to the entire express api, require is a node keyword and load in the moudle

// create our app
//var app express library called as a function and no args.
var app = express();
//heroku
const PORT =process.env.PORT || 3000;
//tell it which folder u want to serve
//app.use add functionality to ur express apps
//express.static is gonna specify a folder name u want to expose to the server
//in this case public is the folder

//common pattern for express middleware
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'htto'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));
//now start the server
//app.listen takes 2 args first PORT and then the fn to call once the server is up.
app.listen(PORT,function(){
  console.log('express server is up on PORT ' + port);
});
//in the root of the app create the public folder--helloReact
//inde

//common pattern for express middleware
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'htto'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});
x.html is the default for the app
