const express = require("express");
const app = express();

const port = 4080;

app.use(express.static(__dirname + "/files"));

app.listen(port, () => {
	console.log(`Server listening on the port::${port}`);
});
