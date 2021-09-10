import mysql from 'promise-mysql';
import config from '../config/index.js';

const connectDB = () => {
    const {dbConnection} = config.load();
    return mysql.createConnection(dbConnection);
}

const todoService = {

    getAll: async () => {

        let connection;
        try {
            connection = await connectDB();
            return await connection.query('SELECT * FROM todo');
        }
        finally {
            if(connection) {
                connection.end();
            }
        }
    },

    getById: async (id) => {

        let connection;
        try {
            connection = await connectDB();
            return await connection.query('SELECT * FROM todo WHERE Id = ?', [id]);
        }
        finally {
            connection?.end();
        }
    }
};

export default todoService;