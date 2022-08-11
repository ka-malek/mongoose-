const express = require("express");
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./config/connectDB')

const PersoneDB = require("./model/personne.js")


connectDB();
const app = express();


// // add persone to db
// const personne = new PersoneDB({name:"Aziz",age:"21",food:"Pizza"});
// personne.save((err)=>{
//     if(err) return console.log(err);
//     // save
// })

// add many

// const persone = ()=>{
//     try{
//         const persone = PersoneDB.create([{name:"mustpha",age:22,food:"hamburger"},{name:"aziz2",age:20,food:"sandwitch scaloup"}]);
//         console.log(persone)
//     }catch (error){
//         console.log(error)
//     }
// }
// persone()
/////

// find all
// const findPersone = async()=>{
//     try{
//         const data = await PersoneDB.find({});
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// } 

// findPersone()

// findone
//     const findone = async()=>{
//         const name = "malek"
//         try{
//             const data = await PersoneDB.findOne({name});
//             console.log(data)

//         } catch(error) {
//             console.log(error)
//         }
//     }
// findone()

// // findonewithID
// const findonewithID = async()=>{
//     const ID = "62ee587e9203225dd8fb9e53"
//     try{
//         const data = await PersoneDB.findById(ID);
//         console.log(data)

//     }catch (error) {
//       console.log(error)
//     }
// }

// findonewithID()

// var findEditThenSave = function(personId, done) {
//     var foodToAdd = 'hamburger';
//     Person.findById(personId, function(err, data) {
//       data.favoriteFoods.push(foodToAdd);
//       data.save();
//       if (err) {
//         return done(err);
//       }
//       else {
//         done(null, data);
//       }
//     });
//   };
//   findEditThenSave()

//find one and update


// findOneAndUpdate

// const  query = {name:"mustpha",age:22};

// const Update = async()=>{
//         const data = await PersoneDB.findOneAndUpdate(query,{$set:{age:20}},(err,data)=>{
//             try {
            
//                 console.log(data)
//             } catch (err) {
//                 console.log(err)
//             }
//         }).clone()
//     }
//     Update()



// Add new people
const person = new PersonDB ({name:'sami',age:50,favoriteFoods:'Lablabi'})
person.save((err)=>{
    if(err) return console.log(err)
})
already saved !!

Find people
const Find = async () => {
    try {
        const data = await PersonDB.find({})
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }
}
// Find()

// Find one person
// const FindOne = async()=> {
//     const food = "pizza"
//     try {
//         const data = await PersonDB.findOne({favoriteFoods:food})
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// FindOne()

// Find one person by ID

// const FindId = async() => {
//   try {
//     const data = await PersonDB.findById(("62ee7677a6e516f9732f8eb6"))
//     console.log(data)
//   } catch (error) {
//     console.log(error)
    
//   }
// }
// FindId()


// find edit and save

// var findEditThenSave = function(personId, done) {
//     var foodToAdd = 'hamburger';
//     Person.findById(personId, function(err, data) {
//       data.favoriteFoods.push(foodToAdd);
//       data.save();
//       if (err) {
//         return done(err);
//       }
//       else {
//         done(null, data);
//       }
//     });
//   };
//   findEditThenSave()

//find one and update


// const query = {name:"pizza"};

// const Update = async()=>{
//     const data = await PersonDB.findOneAndUpdate(query,{$set:{favoriteFoods:'hamburger'}},(err,data)=>{
//         try {
        
//             console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }).clone()
// }
// Update()


// find by id and remove

// const FindIdandDelete = async() => {
//   try {
//     const data = await PersoneDB.findByIdAndRemove(("62ef7a151a0814a2e23c2208"))
//     console.log(data)
//   } catch (error) {
//     console.log(error)
    
//   }
// }
// FindIdandDelete()



const PORT = process.env.PORT || 7000 ;

app.listen(PORT,(err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${PORT}`)
})