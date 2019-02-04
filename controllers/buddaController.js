const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(results => res.json(results.data.value))
      .catch(err => res.status(422).json(err));
  }
};