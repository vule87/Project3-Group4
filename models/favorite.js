const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    quote: { type: String},
    category: { type: String}
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;