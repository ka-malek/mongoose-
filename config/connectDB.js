const mongoose = require('mongoose');
require("dotenv").config({path:"./config/.env"})

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log('DataBase Connected...')

    } catch (err) {
        console.log(err)
    }
    
}

module.exports = connectDB;