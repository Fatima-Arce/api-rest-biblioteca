const mysql = require('mysql2/promise');

    const conexion = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Dell.2022',
        database: 'biblioteca',
        connectionLimit: '10',
        queueLimit: 0
    });

module.exports = conexion;