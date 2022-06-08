const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123456',
  database: 'csy',
  charset: 'utf8',
});

connection.connect();

const query = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, {}, (err, res) => {
      if (err === null) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  });
};

module.exports = {
  query,
  connection,
};
