// exo to do list

import { createServer } from "node:http";

createServer(async (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end();
}).listen(4000);
