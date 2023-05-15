const mongoose = require('mongoose');

const Connection = async() => {
    const URL = 'mongodb+srv://sanaabid:sana1234@cluster0.guiajle.mongodb.net/?retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL)
        console.log("db connected successfully");
    }catch (error){
        console.log("db not connected", error);
    }
}

module.exports = Connection;