//Just includeing the modules, we are going to use
//express is a framework for node.js, which makes our lifes a bit easier
var express = require('express');
//module, used to parse the body of the requests, which our service is going to be receiving- 
//so we can access the different paramethers passed to us like variables, not by parsing ugly strings
var parser = require('body-parser');

//Initializing express.js- its instance will be in the variable app- which we will be using a lot
var app = express();
//just telling the body parser that it will be able to parse data, passed in url encoded format
app.use(parser.urlencoded
({
    extended:true
}));
//or in JSON format
app.use(parser.json());

//app is the express.js instance. "get" means that this piece of code will be called when a GET
//request is received. The first argument is the address, on which this piece of code will respond
//in this case- when someone makes a GET request to the address of our service(http://localhost:8080)
//this particular piece of code will be executed. The second argument is the callback function
//which is to be executed when the GET request on http://localhost:8080 is received
//it also has two arguments- request and response. This two arguments are being populated for us
//by express.js. request holds data for the request, that our service has received- for example
//passed paramethers, headers etc. In response, we fill the data, to be return back to the client,
//that made the request
app.get('/', function(request, response)
{
    //Here we simply write "Hello human!" in the response
    response.write("Hello human!");
    //And close it
    response.end();
});

//Here this piece of code will be executed, when someone makes a GET request to 
//{the address of our service}/test
app.get('/test', function(request, response)
{
    //Here we simply write "This Is SPARTAAAAAAAA!" in the response
    response.write("This Is SPARTAAAAAAAA!");
    //And close it
    response.end();
});

//We can also receive paramethers from the url- passed to us in REST format
//To do this we simply mark the thing we want to be a paramether with : in front of it
//Then we can easily access it from request.params.{the name of the paramether}
app.get('/user/:username', function(request, response)
{
    //Here we simply write "Hello " + the name, that we received as a paramether in the url-in the response
    response.write("Hello " + request.params.username);
    //And close it
    response.end();
});

//Here- this piece of code will be executed when we receive POST request on {the address of our service}/postrequesttest
//to acess the POST paramethers we can use request.body.{the name of the paramether}
//we can use this thanks to body-parser - this module is the one, that adds .body
//to request an populate it with the POST data
app.post('/postrequesttest', function(request, response)
{
    //Here we simply write "Hello " + the name, that we received as a paramether in the POST data-in the response
    response.write("Hello " + request.body.username);
    //And close it
    response.end();
});

app.get('/nyan', function(request, response)
{
    response.end("CAT");
});

//Here we say to our service to start listening on port 8080.
//The second argument is a callback function, to be called when the 
//service starts listening
app.listen(8080, function()
{
    //When the service starts- it will print in the comand prompt/terminal "Serrvice started"
    console.log("Service started");
});
















































