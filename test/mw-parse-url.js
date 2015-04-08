var parseUrl = require('../mw-parse-url');

var assert = require('assert');


describe('parseUrl', function() {
	it('should put a path and query object on req', function() {
		var req = runHandler(parseUrl, '/someurl?test=45');

		assert.equal(req.path, '/someurl');

		assert.deepEqual(req.query, {test: 45});
	});

	it('should put a path and query object on req even when root', function() {
		var req = runHandler(parseUrl, '/');

		assert.equal(req.path, '/');

		assert.deepEqual(req.query, {});
	});

	it('pass to next after parsing', function(done) {
		runHandler(parseUrl, '/', function() {
			done();
		});
	});
});


function runHandler(handler, url, next) {
	var req = {url: url};

	var res = {};

	handler(req, res, next);

	return req;
}
