import {
	readFileSyncError,
	asyncApiError,
	throwErreurperso,
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
}

main();
