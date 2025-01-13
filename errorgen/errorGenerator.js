import fs from "fs";

export function readFileSyncError() {
	try {
		fs.readFileSync("inexistant.txt");
	} catch (error) {
		throw new Error("probleme lors de la lecture du fichier:" + error.message);
	}
}

export function asyncApiError() {
	return new Promise((_, reject) => {
		reject(new Error("simulation d erreur asynchrone"));
	});
}

export function throwErreurperso() {
	throw new Error("NON NON NON vous n'avez pas dit le mot magique");
}
