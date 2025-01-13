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

// app.get("/", (req, res) => {
// 	res.json({ message: "Bienvenue à tous !" });
// });

const adduser = (req, res, next) => {
	req.user = { id: 1, username: "freddy", role: "admin" };
	console.log("c'est bon freddy!!", req.user);
	next();
	// req.users = { username: "users" };
	// console.log("c'est bon les inscrits", req.users);
	// next()
};

const checkPosition = (requiredRole) => {
	return (req, res, next) => {
		if (req.user && req.user.role === requiredRole) {
			next();
		} else {
			return res.status(403).json({ message: "bienvenuex aux users" });
		}
	};
};

app.get("/admin", adduser, checkPosition("admin"), (req, res) => {
	res.json({ message: "Bienvenue, Freddy l'admin" });
});

app.get("/user", adduser, checkPosition("user"), (req, res) => {
	res.json({ message: "Bienvenue les users" });
});
app.get("/", (req, res) => {
	res.json({ message: "Bienvenue humains et autres !" });
});

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
