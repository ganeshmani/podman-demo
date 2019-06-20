const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/',(req,res) => {
    res.send("Podman Demo is running");
});


app.listen(3333,() => {

    console.log("app is listening to port 3000");

})

