const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    character: { type: String},
    quote: { type: String},
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;