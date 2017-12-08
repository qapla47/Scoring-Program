const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  clubName: {
    type: String,
    unique: true,
    required: true,
  }, 
  clubAbbreviation: {
    type: String,
    required: true,
  },
  clubAddress: {
    type: {
      address1: {
        type: String,
        required: true,
      },
      address2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      stateProvince: {
        type: String,
        required: true,
      },
      zipPostCode: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  raceDays: {
    type: [],
    required: true,
  },
  runsRegattas: {
    type: Boolean,
  }
});

module.exports = mongoose.model('Club', ClubSchema);