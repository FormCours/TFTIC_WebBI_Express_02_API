import express from "express";
import serverConfig from './config/server.json';


// Création du server API
const app = express();

// Chargement du fichier de config
let config;
if(process.argv.includes('--production')) {
    config = serverConfig.production;
}
else {
    config = serverConfig.developement;
}
const {port, mode, dbConnection} = config;

// Ajout du middleware pour manipuler des données Json
app.use(express.json())  // -> "application/json"

// Demarrer le server
app.listen(port, () => {
    console.log(`Web Server API on ${port} [Mode : ${mode}]`);
});