var math = require('./math');
var express = require('express');
var util = require('util');
var app = express();
app.configure(function() {
	app.use(app.router);
});
app.get('/fibonacci/:n', function(req, res, next) {
	math.fibonacciAsync(Math.floor(req.params.n),

	function(err, val) {
		if (err) next('FIBO SERVER ERROR ' + e);
		else {
			res.send({
				n: req.params.n,
				result: val
			});
		}
	});
});
app.listen(3002);

console.log('running @localhost:3002/fibonacci')