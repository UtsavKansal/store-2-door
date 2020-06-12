var express = require('express');
var app = express();
var routes = require('./src/routes');

app.use(routes);

app.listen(3000, function() {
    console.log("Example app listening on port 3000!")
});
