import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Remplacer __dirname par fileURLToPath
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function readFileSyncError() {
	try {
		fs.readFileSync("inexistant.txt");
	} catch (error) {
		throw new Error("Problème lors de la lecture du fichier: " + error.message);
	}
}

export function asyncApiError() {
	return new Promise((_, reject) => {
		reject(new Error("Simulation d'erreur asynchrone"));
	});
}

export function throwErreurperso() {
	throw new Error("NON NON NON vous n'avez pas dit le mot magique");
}

export function readJsonConfigFile() {
	// Utiliser __dirname correctement
	const filePath = path.join(__dirname, "package.json");
	console.log("Chemin du fichier:", filePath); // Affiche le chemin réel du fichier

	try {
		// Lire le fichier JSON
		const data = fs.readFileSync(filePath, "utf8");
		const json = JSON.parse(data);
		return json;
	} catch (error) {
		throw new Error(
			"Erreur lors de la lecture du fichier JSON: " + error.message
		);
	}
}
