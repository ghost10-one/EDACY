const mongoose = require('mongoose');
 const UtilisateurSchema = new mongoose.Schema({
       prenom:{
              type: String,
              required:true ,
              trim:true
       },

       nom:{
              type: String,
              required:true ,
              trim:true
       },
       email:{
              type: String,
              required:true ,
              trim:true,
              unique:true
       },
       password:{
              type: String,
              required:true ,
              trim:true
       }

 })

 module.exports = mongoose.model('Utilisateur', UtilisateurSchema);