var Express = require("express");
var app = Express();
var bodyParser = require('body-parser');

// Chat App

// browser(client) sends request every 3 seconds (polling) to get new messages from the server
// browser sends a new request with a new message at any time.

// npm install body-parser --save

var messages = [];

app.use(Express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get("/messages", function(request, response) {
	// returns any new messages to the user.
	response.json(messages);
});


app.post("/messages", function(request, response) {

	console.log(request.body.message);

	// add the message
	messages.push(
		{
			id: messages.length + 1,
			from: request.body.from,
			message: request.body.message,
			time: Date.now()
		}
	);

	response.json(messages);

});

app.listen(9000);

// Our hack:
// <script>
// 	setInterval(function() {
// 		$("body").css({ "background": Math.random() > .5 ? "green" : "red"});
// 	}, 10)
// </script>





