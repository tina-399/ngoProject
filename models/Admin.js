const{ Schema, model } = require("mongoose");

const adminSchema = new Schema(
    {
        fullName: {
            type: String,
            required: [true, "Please provide your fullname."],
        },
        email: {
            type: String,
            required: [true, "Please provide your email."],
        },
        password: {
            type: String,
            required: [true, "Please provide password"],
        },
        
    },
    { timestamps: true},
);

module.exports = model("Admin", adminSchema);