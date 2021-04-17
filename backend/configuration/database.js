require("dotenv").config();
const mongoose = require("mongoose");
//connection
mongoose.connect(
    process.env.MONGODBLOCAL,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (e)=>{
        if(e) throw e;
        console.log("Mongodb connected!");
    }
)
module.exports = mongoose;