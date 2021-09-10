import express from "express";
import mysql from "promise-mysql";
import router from "./routes/index.js";
import config from "./config/index.js";

// Création du server API
const app = express();

// Chargement du fichier de config
const {port, mode, dbConnection} = config.load();

// Test si la connection à la base est fonctionnel
mysql.createConnection(dbConnection)
    .then(connection => {
        connection.end();
    })
    .catch(e => {
        console.log('The configuration of MySQL is in error :( ');
        console.log('Error message : ' + e.sqlMessage);
        process.exit();
    });

// Ajout du middleware pour manipuler des données Json
app.use(express.json())  // -> "application/json"

// Ajout du router
app.use(router);

// Demarrer le server
app.listen(port, () => {
    console.log(`Web Server API on ${port} [Mode : ${mode}]`);
});