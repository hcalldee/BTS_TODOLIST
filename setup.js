const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Perintah CREATE TABLE untuk t_do
const createTDoTable = `
CREATE TABLE t_do (
  id INT(128) NOT NULL,
  title VARCHAR(256) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
`;

// Perintah CREATE TABLE untuk t_list
const createTListTable = `
CREATE TABLE t_list (
  id INT(128) NOT NULL,
  list VARCHAR(255) DEFAULT NULL,
  id_do INT(128) NOT NULL,
  status TINYINT(1) DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_t_list_t_do FOREIGN KEY (id_do) REFERENCES t_do (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
`;

// Perintah CREATE TABLE untuk users
const createUsersTable = `
CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
`;

// Eksekusi perintah-perintah CREATE TABLE satu per satu
pool.query(createTDoTable, (err, results) => {
    if (err) throw err;
    console.log('Table t_do created successfully');
    
    pool.query(createTListTable, (err, results) => {
        if (err) throw err;
        console.log('Table t_list created successfully');
        
        pool.query(createUsersTable, (err, results) => {
            if (err) throw err;
            console.log('Table users created successfully');
            pool.end();
        });
    });
});