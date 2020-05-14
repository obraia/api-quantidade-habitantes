const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();
require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT, () => console.log("The server is started"));