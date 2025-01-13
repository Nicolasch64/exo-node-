import express from "express";
import fs from "fs";
import path from "path";
import { format } from "date-fns";

const app = express();
const port = 3050;

const writeLog = (message) => {
	const logDirectory = path.join(process.cwd(), "logs");

	try {
		if (!fs.existsSync(logDirectory)) {
			fs.mkdirSync(logDirectory);
			console.log("Dossier logs créé avec succès.");
		} else {
			console.log("Le dossier logs existe déjà.");
		}
	} catch (error) {
		console.error("Erreur lors de la création du dossier logs:", error);
	}

	const logDate = format(new Date(), "yyyy-MM-dd");
	const logFilePath = path.join(logDirectory, `${logDate}.log`);

	const logEntry = `${new Date().toISOString()} - ${message}\n`;

	try {
		fs.appendFileSync(logFilePath, logEntry, "utf8");
	} catch (error) {
		console.error("Erreur lors de l'écriture dans le fichier log:", error);
	}
};

app.use((req, res, next) => {
	const logMessage = `${req.method} ${req.url}`;
	console.log(logMessage);
	writeLog(logMessage);
	next();
});

app.get("/", (req, res) => {
	res.send("Hello l'afec!");
});

app.post("/submit", (req, res) => {
	res.send("troiseme test d ecriture dans les log");
});

app.use((err, req, res, next) => {
	const errorMessage = `ERROR: ${err.message}`;
	writeLog(errorMessage);

	res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
