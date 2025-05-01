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
router.post("/ajouterProduit", authenticateToken, ajouterProduit);
//  ----------------------------------------Afficher tous les produits--------------------------------------------------
router.get("/afficherProduit", authenticateToken, afficherProduits);
//  ----------------------------------------Afficher un produit par ID--------------------------------------------------
router.get("/afficherProduitParId/:id", authenticateToken, afficherProduitParId);
//  ----------------------------------------Modifier un produit--------------------------------------------------
router.put("/modifierProduitPard/:id", authenticateToken, modifierProduit);
//  ----------------------------------------Supprimer un produit--------------------------------------------------
router.delete("/supprimerProduitParId/:id", authenticateToken, supprimerProduit);
//  ----------------------------------------Exporter le router--------------------------------------------------
module.exports = router;