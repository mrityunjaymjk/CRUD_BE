const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
