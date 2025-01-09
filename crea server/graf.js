import { createReadStream } from "node:fs";
import { createServer } from "node:http";

const server = createServer((req, res) => {
	const url = new URL(req.url, `http://${req.headers.host}`);

	let body = "";
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("close", () => {
		console.log(body);
		res.end();
	});
	// res.write(`salut ${url.searchParams.get("nom")}`);

	// console.log(url);
	// const file = createReadStream("index.html");
	// res.writeHead(404, {
	// 	"content-type": "text/html",
	// });
	// file.pipe(res);
});

server.listen("3878");
