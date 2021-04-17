const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    avatar:{
        type: String,
    },
    created_at:{
        type: Date,
        default: Date.now,
    },
    updated_at:{
        type: Date,
        default: Date.now,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["Nakama", "Admin"],
        default: "Nakama",
        require: true
    }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;