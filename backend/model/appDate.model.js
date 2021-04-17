const mongoose = require("mongoose"),
    moment = require("moment");

const appDateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    created_at:{
        type: String,
        default: () => moment().format('dddd, MMMM Do YYYY, h:mm:ss A'),
    },
    occasion:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    appDateCreatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
    }
});

const AppDate = mongoose.model("AppDate", appDateSchema);

module.exports = AppDate;