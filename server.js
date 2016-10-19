var express = require('express');
//access to the entire express api, require is a node keyword and load in the moudle

// create our app
//var app express library called as a function and no args.
var app = express();

//tell it which folder u want to serve
//app.use add functionality to ur express apps
//express.static is gonna specify a folder name u want to expose to the server
//in this case public is the folder
app.use(express.static('public'));
//now start the server
//app.listen takes 2 args first port and then the fn to call once the server is up.
app.listen(3000,function(){
  console.log('express server is up on port 3000')
});
//in the root of the app create the public folder--helloReact
//index.html is the default for the app
