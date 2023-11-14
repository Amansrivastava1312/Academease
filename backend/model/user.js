const mongoose = require("mongoose");
const { randomBytes, createHash } = require("crypto");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter the Full Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter the Email"],
        unique:true,
    },
    roll: {
        type: Number,
        required: [true, "Please Enter the University Roll Number"],
        unique:true,
    },
    salt: {
        type: String,
    },

    password: {
        type: String,
        required: [true, "Please Enter the Password"],
    },
})

UserSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHash("sha256", salt).update(user.password).digest("hex");

    this.password = hashedPassword;
    this.salt = salt;

    next();
})

const User = mongoose.model("user", UserSchema);

module.exports = User;