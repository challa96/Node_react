const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
let Port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));




app.listen(Port,function(){
	console.log("server running on :",Port);
});

