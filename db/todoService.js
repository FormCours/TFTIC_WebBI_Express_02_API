import mysql from 'promise-mysql';
import config from '../config/index.js';

const connectDB = () => {
    const {dbConnection} = config.load();
    return mysql.createConnection(dbConnection);
}

