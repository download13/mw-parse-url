# mw-parse-url

Parses the value of `req.url` and puts the path on `req.path` while parsing the query string into an object on `req.query`.

## Install:
	npm i mw-parse-url

## Example:
```javascript
var http = require('http');
var mwUrl = require('mw-parse-url');


http.createServer(function(req, res) {
	mwUrl(req, res);

	res.end('Hello' + req.query.name + '!');
}).listen(80);
```

## License: MIT
