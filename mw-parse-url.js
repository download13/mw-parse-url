var url = require('url');

var qs = require('querystring');


function parseUrl(req, res, next) {
	var parts = url.parse(req.url);

	req.path = parts.pathname;

	req.query = qs.parse(parts.query) || {};

	if(next) {
		process.nextTick(next);
	}
}


module.exports = parseUrl;
