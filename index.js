const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes');

require('dotenv').config({ path: 'variables.env'});

const app = express();

//habilitar handlebars como template engine
app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout'
    })
);
app.set('view engine', 'handlebars');

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router())
app.listen(process.env.PUERTO);