const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
       nom: {
              type: String,
              required: true,
              trim: true
       },
       description: {
              type: String,
              required: true,
              trim: true
       },
       prix: {
              type: Number,
              required: true
       },
       image: {
              type: String,
              required: true
       },
       categorie: {
              type: String,
              required: true
       }
});
const Produit = mongoose.model('Produit', ProduitSchema);