// import { createReadStream } from "node:fs";
// import { stat } from "node:fs/promises";

// // const content = await readFile("video.mp4");
// // await writeFile("video-copy.mp4", content);

// const stream = createReadStream("video.mp4");
// const { size } = await stat("video.mp4");
// let read = 0;
// stream.on("data", (chunk) => {
// 	read += chunk.length;
// 	console.log(Math.round((100 * read) / size));
// });
// stream.on("close", () => {
// 	console.log("close");
// });

// Import the express module
const express = require("express");

// Create an Express application object
const app = express();

// Define a route for the root path ("/")
app.get("/", (req, res) => {
	// Send the response 'Hello Express' when the root path is accessed
	res.send("Hello Express");
});

// Set the server to listen on a port (e.g., 3000)
app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
