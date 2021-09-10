import express from "express";
import router from "./routes/index.js";
import config from "./config/index.js";

// Création du server API
const app = express();

// Chargement du fichier de config
const {port, mode} = config.load();

// Ajout du middleware pour manipuler des données Json
app.use(express.json())  // -> "application/json"

// Ajout du router
app.use(router);

// Demarrer le server
app.listen(port, () => {
    console.log(`Web Server API on ${port} [Mode : ${mode}]`);
});