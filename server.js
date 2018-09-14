const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./server/routes');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+"/angular/dist/angular")));
app.set('views', path.join(__dirname+'/client/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

router(app);

app.listen(8000, errs => console.log(errs?errs:"running"));

