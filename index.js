//to store info for signup in db
// const LoadBank = require('./controllers/bankController');
// LoadBank();
const express = require('express')
const Connection = require('./database/connection');
const Router = require('./routes/route.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3111;
app.use(cors());
app.use(bodyParser());
app.use('/', Router);
app.listen(PORT, ()=> console.log("Server is running"));
Connection();
