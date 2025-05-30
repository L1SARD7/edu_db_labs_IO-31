import mysql from 'mysql2/promise';

export let connection;

export const runDB = async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'expertsurveysystemdb'
  });
  console.log('MySQL connected');
};
export default {
  runDB,
  connection
};