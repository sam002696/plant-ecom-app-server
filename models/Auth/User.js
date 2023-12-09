const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nickName: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: Number,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
    },
    address: {
      type: String,
      ref: "Address",
    },
    profilePic: {
      type: String,
    },
    orders: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
