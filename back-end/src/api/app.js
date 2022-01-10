const express = require('express');
const cors = require('cors');
const path = require('path');

const error = require('./middlewares/error');
const userRoute = require('./routes/usersRoutes');
const saleRoute = require('./routes/salesRoutes');
const productRoute = require('./routes/productsRoutes');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/images',express.static(path.normalize(`${__dirname}/../../public`)));

app.use('/user', userRoute);
app.use('/sale', saleRoute);
app.use('/product', productRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(error);

module.exports = app;
