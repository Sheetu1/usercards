// endpoint likhte h or middleware

const  express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('../public'));


const indexRouter = require('./routes/index.routes')

app.use('/',indexRouter);

module.exports = app;