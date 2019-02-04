const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
      console.log("logging");
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(results => res.json(results.data.value))
      .catch(err => res.status(422).json(err));
  }
};
