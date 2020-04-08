const express = require('express');
const port = 8000;

const app = express();


app.get('/', function(req, res){
    res.send("It is running!");
});
app.get('/profile', function(req, res){
    res.send("Profile not found");
});



app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})