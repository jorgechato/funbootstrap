var express = require('express'),
cors = require('cors'),
compression = require('compression'),
swig = require('swig');

var app = express();

//Static files
app.use(compression());
app.use(express.static('./dist'));

//Config views
app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views','./dist/views');

app.set('port', (process.env.PORT || 5000));

//Cors and init json Middleware
app.use(cors());

app.get('/eventos',function(req, res){
  res.render('events');
});

app.get('/actividades',function(req, res){
  res.render('activities');
});

app.get('/contacto',function(req, res){
  res.render('contact');
});

app.get('*',function(req, res){
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('start',"Node in "+app.settings.env+" mode at http://localhost:" +app.get('port'));
});
