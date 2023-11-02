var db = require('../db');
// TODO: DELETE FAKE DATA LATER
const users = [{username: 'Justin'}, {username: 'Lance'}];

module.exports = {
  getAll: function (callback) {
    db.query(
      'SELECT * FROM users',
      [],
      (err, results) => {callback(err, results); }
    );
  },
  create: function (username, callback) {
    db.query(
      'INSERT INTO users (name) VALUES (?)',
      [username],
      (err, results) => {callback(err, results); }
    );
  }
};

