import { createServer } from "node:http";

createServer(async (req, res) => {
	res.end();
}).listen(4000);
