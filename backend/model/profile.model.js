const mongoose = require("mongoose"),
    moment = require("moment");

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
        type: String,
        default: () => moment().format('dddd, MMMM Do YYYY, h:mm:ss A'),
    },
    updated_at:{
        type: String,
        default: () => moment().format('dddd, MMMM Do YYYY, h:mm:ss A'),
    },
    password:{
        type: String,
    },
    role:{
        type: String,
        enum: ["Nakama", "Admin"],
        default: "Nakama"
    }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;