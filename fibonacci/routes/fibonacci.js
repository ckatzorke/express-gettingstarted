var math = require('../math');
var util = require('util');
exports.index = function(req, res) {
	if (req.query.fibonum) {
		var t = process.hrtime();
		var f = math.fibonacci(req.query.fibonum);
		t = process.hrtime(t);
		t = (t[0] * 1000 + t[1] / 1000000).toFixed(3);
		util.log("exectime for fibonacci " + t + "ms");
		res.render('fibonacci', {
			title: "Calculate Fibonacci numbers",
			fibonum: req.query.fibonum,
			fiboval: f,
			exectime: t
		});
	} else {
		res.render('fibonacci', {
			title: "Calculate Fibonacci numbers",
			fiboval: undefined
		});
	}
};

exports.loop = function(req, res) {
	if (req.query.fibonum) {
		var t = process.hrtime();
		var f = math.fibonacciLoop(req.query.fibonum);
		t = process.hrtime(t);
		t = (t[0] * 1000 + t[1] / 1000000).toFixed(3);
		res.render('fibonacci', {
			title: "Calculate Fibonacci numbers",
			fibonum: req.query.fibonum,
			fiboval: f,
			exectime: t
		});
	} else {
		res.render('fibonacci', {
			title: "Calculate Fibonacci numbers",
			fiboval: undefined
		});
	}
};


/**
 * Impl for fibonacciAsync
 */
exports.async = function(req, res) {
	if (req.query.fibonum) {
		var t = process.hrtime();
		math.fibonacciAsync(req.query.fibonum, function(err, fiboval) {
			t = process.hrtime(t);
			t = (t[0] * 1000 + t[1] / 1000000).toFixed(3);
			res.render('fibonacci', {
				title: "Calculate Fibonacci numbers",
				fibonum: req.query.fibonum,
				fiboval: fiboval,
				exectime: t
			});
		});
	} else {
		res.render('fibonacci', {
			title: "Calculate Fibonacci numbers",
			fiboval: undefined
		});
	}
};