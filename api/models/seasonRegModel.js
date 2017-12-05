const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
  seasonName: {
    type: String,
    unique: true,
    required: true
  },
  seasonStartDate: {
    type: Date
  },
  seasonEndDate: {
    type: Date
  },
  seasonSeriesTitles: {
    type: []
  },
  weeksInSeries: {
    type: Number
  },
  overallScoring: {
    type: Boolean
  }
});

module.exports = mongoose.model("Season", UserSchema);
