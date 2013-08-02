/**
 * Module dependencies.
 */

var express = require('express'),
	engine = require('ejs-locals'),
	routes = require('./routes'),
	user = require('./routes/user'),
	ueaac = require('./routes/ueaac'),
	mvcDemo = require('./routes/mvcDemo'),
	http = require('http'),
	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//设置资源目录public为静态文件夹
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
//注册ejs模板为html页。原来以.ejs为后缀的模板页，现在的后缀名可以//是.html
//app.engine('.html', require('ejs').__express);
//注册ejs-locals模版为html页
app.engine('.html', engine);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/us', user.list);
app.get('/ueaac', ueaac.main);
app.get('/mvcDemo', mvcDemo.main);

/*404*/
app.get('*', routes.pageNotFound);

http.createServer(app).listen(app.get('port'), function() {
	//console.log('message');	
	console.log('Express server listening on port ' + app.get('port'));
});