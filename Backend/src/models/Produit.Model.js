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
              default: 'autre'
       },
       quantite: {
              type: Number,
              default: 0 // ou required: true si tu veux l'obliger
            }
});
module.exports = mongoose.model('Produit', ProduitSchema);
