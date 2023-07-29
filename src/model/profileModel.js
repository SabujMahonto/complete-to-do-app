const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    fistName: { type: String },
    lastName: { type: String },
    email: { type: String },
    mobileNum: { type: Number },
    city: { type: String },
    userName: { type: String },
    password: { type: String },
  },
  { versionKey: false }
);

const profileModel = mongoose.model("profile", dataSchema);

module.exports = profileModel;
