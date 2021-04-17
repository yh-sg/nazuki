//All dependencies/variables
require('dotenv').config();
const express = require("express"),
    morgan = require("morgan"),
    app = express(),
    PORT = parseInt(process.env.PORT) || 3010,
    cors = require("cors");

//My middlewares
require("./configuration/database.js");
app.use(morgan("combined"));
app.use(cors());
app.use(express.json()); //allows me to receive JSON files from HEADER of REQUEST

//setup my routes
app.use("/profiles", require("./routes/profile.route"));
app.use("/appdate", require("./routes/appDate.route"));

app.listen(PORT, (e)=>{
    if(e) console.log("Error in server setup");
    console.log(`App is listening on PORT ${PORT} at ${new Date()}`); 
})
