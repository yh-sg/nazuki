//All dependencies
const express = require("express"),
    morgan = require("morgan"),
    app = express();

//My middlewares
require('dotenv').config();
app.use(morgan("combined"));

//Variables
const PORT = parseInt(process.env.PORT) || 3010;

app.listen(PORT, (e)=>{
    if(e) console.log("Error in server setup");
    console.log(`App is listening on PORT ,${PORT} at ${new Date()}`); 
})
