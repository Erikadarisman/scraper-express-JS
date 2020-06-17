const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const routes = require('./routes')

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log(`Listening on port ${port}!`);