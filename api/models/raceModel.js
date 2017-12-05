const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
  season: {
    type: Schema.Types.ObjectId,
    ref: "Season",
  },
  series: {
    type: Schema.Types.ObjectId,
    ref: "Series",
  },
  raceNumber: {
    type: Schema.Types.ObjectId,
    ref: "RaceData",
  },
  boat: {
    type: Schema.Types.ObjectId,
    ref: "Boat"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

module.exports = mongoose.model("Race", RaceSchema);
