var express 	= require('express');
var bodyparser 	= require('body-parser');
var multer		= require('multer');

var upload		= multer();
var app 		= express();

// Middleware funtcion untuk memunculka log permintaan pada protokol
// app.use(function(req, res, next){
// 	console.log("request terbaru diterima pada "+Date.now());

// 	next();
// });
// // Route handler
// app.get('/', function(req,res){
// 	res.send("/Middle");
// });
// app.use('/', function(req,res){
// 	console.log("End");
// });

// app.get('/dir', function(req, res){
// 	res.send(__filename);
// });

// app.get('/lihatakudisini', function(req, res){
// 	res.render('fview');
// });

// app.get('/dynamic_view', function (req, res){
// 	res.render('dynamic',{
// 		user: {
// 			nama 	: "immsswd",
// 			url 	: "https://immsswd.github.io"
// 		}
// 	});
// });
// get static files
app.use(express.static('public'));
// parsing aplikasi/json
app.use(bodyparser.json());
// pasring aplikasi/xwww-
app.use(bodyparser.urlencoded({ extended: true }));
// form-urlrencoded

// parsing multipart/form-data
app.use(upload.array());

app.get('/', function(req, res){
	res.render('form');
});
app.post('/', function(req, res){
	console.log(req.body);
	res.send("request anda ditermia, coba lihat di console log terminal")
});

app.set('view engine', 'pug');
app.set('views', './views');



app.get('/webku', function(req, res){
	res.render('content');
});

app.listen(2222, function(){
	console.log("http://localhost:2222")
});