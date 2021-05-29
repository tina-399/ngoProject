const { Schema, model } = require("mongoose");

const groupSchema = new Schema(
  {
    groupName: {
      type: String,
      required: [true, "Please this field can not be empty"],
    },
    groupLocation: {
      type: String,
      required: [true, "Please this field can not b empty"],
    },
    groupEmail: {
      type: String,
      required: true,
    },
    groupDescription: {
      type: String,
    },
    groupCategory: {
      type: String,
      required: true,
    },
    groupPassword: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Group", groupSchema);
