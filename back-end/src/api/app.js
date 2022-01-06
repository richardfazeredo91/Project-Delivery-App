const express = require('express');
const cors = require('cors');

const error = require('./middlewares/error');
const userRoute = require('./routes/usersRoutes');
const saleRoute = require('./routes/saleRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user', userRoute);
app.use('/sale', saleRoute);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(error);

module.exports = app;
