const mongoose = require("mongoose");

const mongoDBConnection = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/miniProject").then(()=>console.log("mongodb connected")).catch((err)=>console.log(err));
}

module.exports = mongoDBConnection;