const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: '172.0.0.78',
        user: 'root',
        password: 'manager',
        database: 'dac',
        port: 8888
    });

    connection.connect();

    return connection;
}

module.exports = {
    connect: connect
}