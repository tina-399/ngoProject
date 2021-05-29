const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },

    email: {
      type: String,
      required: [true, "Please provide email"],
    },

    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
