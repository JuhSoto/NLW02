import knex from 'knex';
import path from 'path';


const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlte')
    },
    useNullAsDefault: true,
})

export default db;