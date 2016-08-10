var express            = require('express');
var databaseConnector  = require('express-myconnection');
var mysql              = require('mysql');
var bodyParser         = require('body-parser');
var methodOverride     = require('method-override');
var connectionProvider = require('./routes/connectionProvider');
var personServ         = require('./dataServices/personService');
var studioServ         = require('./dataServices/personService');
var locationServ       = require('./dataServices/locationService')
var person             = require('./routes/person')
var studio             = require('./routes/studio')
var app                = express();

var servicesConnector = function(connection) {
    return {
         person : new personServ(connection),
         studio : new studioServ(connection),
         location : new locationServ(connection)
     }
}
var database = {
    host:     'localhost',
    database: 'skillshouse',
    user:     'root',
    password: 'theaya5379',
    port:     3306
};
app.use(function(req,res,next){
    console.log('\n---------REQUEST-------')
    console.log(req.method+' \t'+req.path)
    console.log(req.body)
    console.log('--------------------------')
    next()
})
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Origin ,X-Requested-With,content-type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var provideConnection = new connectionProvider(database, servicesConnector);
app.use(provideConnection.setupProvider);
app.use(databaseConnector(mysql, database, 'pool'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded( {'extended':'true'} ));
app.use(bodyParser.json());
app.use(bodyParser.json( { type: 'application/vnd.api+json' } ));
app.use(methodOverride());

app.response.sendError = function(err){
    console.log('sending error')
    console.log(err)
    var err = {error:true,msg:err.toString()};
    this.send(err)

}

app.get('*',
    function (req,res) {
        res.sendFile('/public/index.html');
    }
)
var person = new person();
var studio = new studio();
app.post('/api/addArtist', person.addPerson);
app.post('/api/addStudio', studio.addStudio);

app.listen(3030);
