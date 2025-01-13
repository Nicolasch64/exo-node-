import express from "express";
import axios from "axios";

const app = express();
const port = 2000;

// app.get("/users/:id", async (req, res, next) => {
// 	const { id } = req.params;

// 	try {
// 		const response = await axios.get(
// 			`https://jsonplaceholder.typicode.com/users/${id}`
// 		);

// 		if (response.data) {
// 			res.json(response.data);
// 		} else {
// 			res.status(404).json({ message: `User with ID ${id} not found` });
// 		}
// 	} catch (error) {
// 		next(error);
// 	}
// });
//
app.get("/users/:id/city", async (req, res, next) => {
	const { id } = req.params;

	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		const city = response.data.address.city;

		res.json({ city });
	} catch (error) {
		console.error("pas de ville", error);
		res.status(500).json({ message: "erreur interne du serveur" });
	}
});

// app.get("/users", async (req, res, next) => {
// 	try {
// 		const response = await axios.get(
// 			"https://jsonplaceholder.typicode.com/users"
// 		);
// 		res.json(response.data);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// app.use((err, req, res, next) => {
// 	console.error(err);
// 	res.status(500).json({ message: "Internal Server Error" });
// });

// app.use((req, res, next) => {
// 	res.status(404).json({ message: "Route not found" });
// });

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// const getUserAdress = async (userId) => {
// 	try {
// 		const response = await axios.get(
// 			`https://jsonplaceholder.typicode.com/users/${userId}`
// 		);

// 		const address = response.data.address;
// 		console.log(`L'utilisateur avec l'ID ${userId} habite à :`);
// 		console.log(`Rue: ${address.street}`);
// 		console.log(`Suite: ${address.suite}`);
// 		console.log(`Ville: ${address.city}`);
// 		console.log(`Code Postal: ${address.zipcode}`);
// 		console.log(
// 			`Coordonnées: Latitude ${address.geo.lat}, Longitude ${address.geo.lng}`
// 		);
// 	} catch (error) {
// 		console.error("Erreur:", error);
// 	}
// };
// getUserAdress(3);

const getUserCity = async (userId) => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${userId}`
		);

		const city = response.data.address.city;
		console.log(`L'utilisateur avec l'ID ${userId} habite à :Ville: ${city}`);
	} catch (error) {
		console.error("Erreur:", error);
	}
};
getUserCity(2);
