const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceDataSchema = new Schema({
  raceNumber: {
    type: Number,
    required: true,
  },
  raceTitle: {
    type: String,
    required: true,
  },
  raceDate: {
    type: Date,
    required: true,
  },
  startTimes: [
    {
      division: {
        type: Number,
        required: true,
      },
      divisionName: {
        type: Schema.Types.ObjectId,
        ref: "Day",
        required: true,
      },
      ratingToUse: {
        type: Schema.Types.ObjectId,
        ref: "Fleet",
        required: true,
      },
      actualTime: {
        type: Date,
        required: true,
      },
    },
  ],
  windSpeed: {
    type: String,
  },
  courseDesignation: {
    type: String,
  },
  courseLength: {
    type: Number,
  },
  comments: [],
  finishes: [{
    type: Schema.Types.ObjectId,
    ref: "Race"
  }]
});

module.exports = mongoose.model("RaceData", RaceDataSchema);
