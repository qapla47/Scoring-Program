const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeriesSchema = new Schema({
  seriesName: {
    type: String,
    unique: true,
    required: true
  },
  seriesStartDate: {
    type: Date
  },
  weeksInSeries: {
    type: Schema.Types.ObjectId,
    ref: "Season"
  },
});

module.exports = mongoose.model("Series", SeriesSchema);
