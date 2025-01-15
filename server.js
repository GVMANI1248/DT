const Koa = require('koa');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const routes = require('./routes');
require('dotenv').config();

const app = new Koa();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('connected to mongodb...'))
    .catch((e) => console.log(e));

// Routes
app.use(routes.routes()).use(routes.allowedMethods());

// Start the server
app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
