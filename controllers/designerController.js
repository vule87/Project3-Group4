const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    axios
      .get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
      .then(results => res.json(results.data.value))
      .catch(err => res.status(422).json(err));
  }
};