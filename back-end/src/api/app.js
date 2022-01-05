const express = require('express');
const error = require('./middlewares/error');
const userRoute = require('./routes/usersRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(error);

module.exports = app;
