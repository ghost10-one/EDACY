const mongoose = require('mongoose');
require('dotenv').config();

// app.use(express.json())
// app.use(express.urlencoded({extended :false}))

const connectDB = async () => {
       try{
              await mongoose.connect(process.env.MONGO_URI),{
                     useNewUrlParser:true,
                     useUnifiedTopology: true
              }
              console.log('MongoDB connecte');
       }

       catch(e){
              console.error('Probleme de connexion MongoB:', e);
       }
}

connectDB()

module.exports = connectDB;