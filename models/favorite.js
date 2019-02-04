const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    title: { type: String},
    quote: { type: String},
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;