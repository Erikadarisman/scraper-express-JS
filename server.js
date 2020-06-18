const express = require('express')
const app = express()
// const port = 3000
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

routes(app);


var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });