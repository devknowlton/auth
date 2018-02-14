
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
var port = process.env.PORT || 3000;


//-----------------
// Middlewares
//-----------------

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());


// --------
// Routes
// --------

// Root
app.get('/',function(request,response){
  response.sendFile(__dirname + '/public/index.html');
});




app.listen(port);
console.log("Listening at port 3000...");
