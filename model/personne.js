const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const PersoneSchema = new Schema({
    name:{type:String,required:true},
    age:{type:Number},
    food:{type:String},
    favoriteFoods:{type:[String]}
})

const PersoneDB = model("Persone", PersoneSchema)

module.exports = PersoneDB;