// import fs from "node:fs";

// const content = fs.readFile(
// 	"demo.txt",
// 	{ encoding: "utf8" },
// 	function (err, content) {
// 		console.log(content);
// 	}
// );
// console.log("hello");

// import { readFile } from "node:fs/promises";

// const content = await Promise.all([
// 	readFile("demo.txt", { encoding: "utf8" }),
// 	readFile("app.js", { encoding: "utf8" }),
// ]);

// console.log(content);

// import { open } from "node:fs/promises";

// await writeFile("demo.txt", "salut les zozos", {
// 	flag: "a",
// });

// const i = await stat("demo.txt");
// console.log(i);

// const file = await open("demo.txt", "a");
// file.write(
// 	"Particulièrement défaillante sur les sujets liés à la surveillance d’État, la CNIL a encore manqué une occasion de s’affirmer comme véritable contre-pouvoir et, au passage, d’assurer la défense des droits humains. À l’occasion de l’examen de la proposition de loi sur la sécurité dans les transports, elle a ainsi plongé tête la première pour venir au secours des institutions policières et justifier leur utilisation d’un logiciel de vidéosurveillance algorithmique dite « a posteriori », telle que celle commercialisée par la société Briefcam. Si nous avions de moins en moins d’attentes envers la CNIL, nous ne pouvons aujourd’hui qu’acter ce constat : l’autorité se pense chaque jour davantage comme une institution d’accompagnement de l’« innovation » au service des start-ups et du pouvoir plutôt qu’une autorité de défense des droits."
// );

// file.close();

// import { readdir, stat } from "node:fs/promises";
// // import { watch } from "node:fs/promises";

// // const watcher = watch("./");

// // for await (const event of watcher) {
// // 	console.log(event);
// // }
// const files = await readdir("./", { withFileTypes: true });
// for (const file of files) {
// 	const parts = [file.isDirectory() ? "D" : "F", file.name];

// 	if (!file.isDirectory()) {
// 		const { size } = await stat(file.name);
// 		parts.push(`${size}o`);
// 	}

// 	console.log(parts.join(" - "));
// }

// SET
// const names = ["john", "jane", "henri", "bernard", "john"];

// console.log([...new Set(names)]);

// MAP

// const persons = [
// 	{ name: "jean jean", age: 18 },
// 	{ name: "jean ", age: 118 },
// 	{ name: "jeane ", age: 58 },
// ];

// const ul = document.querySelector("ul");

// persons.forEach((person) => {
// 	const li = document.createElement("li");
// 	li.innerHTML = `<strong>${person.name}</strong>:${person.age}`;
// 	ul.appendChild(li);
// });

// const state = {
// 	count: 0,
// };

// // COMPTEUR
// const input = document.querySelector("input");

// const state = new Proxy(
// 	{
// 		count: 0,
// 	},
// 	{
// 		set(target, prop, value) {
// 			if (prop === "count") {
// 				input.value = value;
// 			}
// 			return Reflect.set(...arguments);
// 		},
// 	}
// );

// document.getElementById("increment").addEventListener("click", () => {
// 	state.count++;
// });
// document.getElementById("decrement").addEventListener("click", () => {
// 	state.count--;
// });
// document.getElementById("reset").addEventListener("click", () => {
// 	state.count = 0;
// });

// input.value = "0";

// window.state = state;

// exo node lire et ecricre dans  un fichier

import { stat, writeFile } from "node:fs/promises";
// const content = await Promise.all([
// 	readFile("demo.txt", { encoding: "Utf8" }),
// 	readFile("ap.js", { encoding: "Utf8" }),
// ]);
// console.log(content);

const i = await stat("demo.txt");
console.log(i);
