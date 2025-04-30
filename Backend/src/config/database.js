const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
       try{
              await mongoose.connect(process.env.MONGO_URL),{
                     useNewUrlParser:true
              }
              console.log('MongoDB connected');
       }

       catch(e){
              console.error('MongoDB connection error:', e);
       }
}

module.exports = connectDB;