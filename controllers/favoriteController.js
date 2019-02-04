const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Favorite.find(req.query)
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Favorite.create(req.body)
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Favorite.findById(req.params.id)
      .then(dbFavorite => dbFavorite.remove())
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  }
};
