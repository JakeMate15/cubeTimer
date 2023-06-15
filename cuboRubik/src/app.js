const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const loginRoutes = require('./routes/login');
const timerRoutes = require('./routes/timer');

const app = express();

app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'timer'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use('/src/js/', express.static(path.join(__dirname, 'js'), { 'Content-Type': 'text/javascript' }));
app.use('/src/styles', express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'img')));

app.listen(app.get('port'), () => {
    console.log('Puerto:', app.get('port'));
});

app.use('/', loginRoutes);
app.use('/', timerRoutes);

app.get('/', (req, res) => {
    if (req.session.loggedin === true) {
        res.redirect('timer');
    } else {
        res.redirect('/login');
    }
});
