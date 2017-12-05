const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoatSchema = new Schema({
  sail-BowNumber: {
    type: String,
    unique: true,
    required: true
  },
  boatName: {
    type: String,
  },
  boatType: {
    type: String
  },
  hullColors: {
    type: []
  },
  mainSailColors: {
    type: []
  },
  sailNumberColors: {
    type: String
  },
  jibColors: {
    type: []
  },
  spinnakerColors: {
    type: []
  },
  spinnakerShape: {
    type: String
  },
  spinnakerCut: {
    type: String
  },
  ircRating: {
    type: Number
  },
  phrfSpinRating: {
    type: Number
  },
  phrfNFSRating: {
    type: Number
  },
  primaryDivision: {
    type: Number
  },
  secondayDivision: {
    type: Number
  },
  ownerFirstName: {
    type: String,
    required: true
  },
  ownerLastName: {
    type: String,
    required: true
  },
  clubAffiliation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Boat", BoatSchema);
