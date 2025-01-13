import express from "express";
const app = express();
const port = 3100;

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers["authorization"];

	if (!authHeader) {
		return res.status(403).json({ message: "t as pas le droit d entrer" });
	}

	const [type, token] = authHeader.split(" ");
	if (type != "Bearer" || token !== "freddyKruger") {
		return res.status(403).json({ message: "non non non" });
	}
	next();
};

app.get("/private", authMiddleware, (req, res) => {
	res.json({ message: "Bienvenue dans la zone 51 !" });
});

app.get("/", (req, res) => {
	res.json({ message: "Bienvenue à tous !" });
});

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
