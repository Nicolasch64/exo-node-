import {
	readFileSyncError,
	asyncApiError,
	throwErreurperso,
	readJsonConfigFile,
} from "./errorGenerator.js";

async function main() {
	try {
		console.log("tentative de lecture du fichier ");
		readFileSyncError();
	} catch (error) {
		console.error("Erreur capturée (synchrones) :", error.message);
		console.error("Stack trace :", error.stack);
	} finally {
		console.log("Nettoyage après tentative de lecture du fichier.");
	}

	try {
		console.log("tentative d appel api asynchrone");
		await asyncApiError();
	} catch (error) {
		console.error("Erreur capturée (asynchrone) :", error.message);
		console.error("Stack trace :", error.stack);
	} finally {
		console.log("Nettoyage après tentative d'appel API.");
	}

	try {
		console.log("lancement de ma connerie");
		throwErreurperso();
	} catch (error) {
		console.error("j ai capturé ta connerie:", error.message);
		console.error("Stack trace :", error.stack);
	} finally {
		console.log("Nettoyage après lancement de ta connerie.");
	}

	try {
		console.log("Lecture du fichier package.json");
		const config = readJsonConfigFile();
		console.log("Fichier bien lu", config);
	} catch (error) {
		console.error(
			"Problème lors de la tentative de lecture du fichier package.json",
			error.message
		);
		console.error("Stack trace :", error.stack);
	} finally {
		console.log("Nettoyage après lecture du fichier JSON.");
	}
}

main();

// // RECUPERATION D UN FICHIER D ARTIST DANS LE MEME DOSSIER:

// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import fs from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const filePath = join(__dirname, "artist.txt");

// fs.readFile(filePath, "utf8", (err, data) => {
// 	if (err) {
// 		console.error("Error reading file:", err);
// 		return;
// 	}
// 	console.log("File content:", data);
// });
