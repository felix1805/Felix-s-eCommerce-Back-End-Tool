require('dotenv').config();
const { DB_NAME } = process.env;

const { promisify } = require('util');
const mysql = require('mysql2');
const options = { user: 'root' };

const db = mysql.createConnection(options);
const executeAsync = promisify(db.execute).bind(db);

const init = async () => {
  try {
    await executeAsync(`DROP DATABASE IF EXISTS ${DB_NAME};`);
    await executeAsync(`CREATE DATABASE ${DB_NAME};`);
    console.log('DB Created');
  } catch(err) {
    console.log(err);
  }
  process.exit();
};

init();
