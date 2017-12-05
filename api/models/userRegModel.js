const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  clubAffiliation: [
    {
      type: Schema.Types.ObjectId,
      ref: "Club"
    }
  ],

  certifiedPRO: {
    isCertified: {
      type: Boolean
    },
    usSailingNumber: {
      type: text
    }
  }
});

module.exports = mongoose.model("User", UserSchema);
