require('dotenv').config();
require('express-namespace');
require('module-alias/register');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const InitiateDatabase = require('./src/modules/database.module');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

InitiateDatabase();

app.namespace('/api', function(){
    require('@routes/brand.route')(app);
    require('@routes/bike.route')(app);
    require('@routes/authentication.route')(app);
    require('@routes/user_bike.route')(app);
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port 3000');
});