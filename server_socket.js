const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.router;
let Port = process.env.PORT || 5000;
const ws = require('express-ws')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(path.join(__dirname, 'ws.html'));
});


app.listen(Port,function(){
	console.log("server running on :",Port);
});

app.ws('/', (s, req) => {
  console.error('websocket connection');
  for (var t = 0; t < 3; t++)
    setTimeout(() => s.send('message from server', ()=>{}), 1000*t);
});
