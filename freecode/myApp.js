// console.log("hello world");

const path = require("path");
const express = require("express");
const app = express();

const absolutePath = path.join(__dirname, "views", "index.html");

app.get("/", (req, res) => {
	res.sendFile(absolutePath);
});

app.listen(7000, () => {
	console.log("Le serveur fonctionne sur http://localhost:7000");
});

// console.log("Hello gens");
