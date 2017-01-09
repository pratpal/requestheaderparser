'use strict';

var path = process.cwd();
var requestHeaderParser = require(path + '/app/controllers/requestheaderparser.js');

module.exports = function (app) {

var tp = new requestHeaderParser();

app.get('/', function (req, res) {
		res.json(tp.getHeaders(req));
	})



}