var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll( (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(data);
      }
    });
  },
  post: function (req, res) {}
};
