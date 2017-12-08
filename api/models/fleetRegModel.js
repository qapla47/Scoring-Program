const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FleetSchema = new Schema({
  fleetName: {
    type: String,
    unique: true,
    required: true
  },
  fleetRaceDays: [{
    type: Schema.Types.ObjectId,
    ref: 'Club',
    required: true
  }],
  handicapMethod: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Fleet", FleetSchema);
