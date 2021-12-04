const mongoose = requre("mongoose");

const colorSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  mainColor: String,
  firstAlternate: String,
  secondAlternate: String
});

module.exports = mongoose.model('Color', colorSchema);
