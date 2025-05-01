const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const authenticateToken = require('../middleware/Auth.Middleware');
const{
  ajouterProduit,
  afficherProduits,
  afficherProduitParId,
  modifierProduit,
  supprimerProduit
} = require("../controllers/Produit.Controller");
//  ----------------------------------------Ajouter un produit--------------------------------------------------
router.post("/ajouterProduit", ajouterProduit);
//  ----------------------------------------Afficher tous les produits--------------------------------------------------
router.get("/afficherProduits",  afficherProduits);
//  ----------------------------------------Afficher un produit par ID--------------------------------------------------
router.get("/afficherProduitParId/:id", afficherProduitParId);
//  ----------------------------------------Modifier un produit--------------------------------------------------
router.put("/modifierProduitPard/:id",  modifierProduit);
//  ----------------------------------------Supprimer un produit--------------------------------------------------
router.delete("/supprimerProduitParId/:id",  supprimerProduit);

module.exports = router;