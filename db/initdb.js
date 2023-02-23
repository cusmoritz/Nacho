const client = require('./index');

const createTables = async() => {
    try {
        console.log('creating tables...');
        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );

        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            business VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            chip_val DECIMAL NOT NULL,
            chip_notes VARCHAR(300),
            cheese_val DECIMAL NOT NULL,
            cheese_notes VARCHAR(300),
            meat_val DECIMAL NOT NULL,
            meat_notes VARCHAR(300),
            guac_val DECIMAL NOT NULL,
            guac_notes VARCHAR(300),
            salsa_val DECIMAL NOT NULL,
            salsa_notes VARCHAR(300),
            other_notes VARCHAR(1000),
            cost DECIMAL NOT NULL
        );
        `
        );
        console.log('done creating tables')
    } catch (error) {
        throw error;
    }
};

const dropTables = async() => {
    try {
        console.log('dropping tables...');
        await client.query(`
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS users;
        `);
        console.log('done dropping tables')
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createTables,
    dropTables,

}