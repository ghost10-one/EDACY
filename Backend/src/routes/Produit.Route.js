const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Produit = require("../models/Produit.Model");
const authenticateToken = require('../middleware/Auth.Middleware');
const{
  ajouterProduit,
  afficherProduits,
  afficherProduitParId,
  modifierProduit,
  supprimerProduit
} = require("../controllers/Produit.Controller");
//  ----------------------------------------Ajouter un produit--------------------------------------------------
router.post("/", authenticateToken, ajouterProduit);
//  ----------------------------------------Afficher tous les produits--------------------------------------------------
router.get("/", authenticateToken, afficherProduits);
//  ----------------------------------------Afficher un produit par ID--------------------------------------------------
router.get("/:id", authenticateToken, afficherProduitParId);
//  ----------------------------------------Modifier un produit--------------------------------------------------
router.put("/:id", authenticateToken, modifierProduit);
//  ----------------------------------------Supprimer un produit--------------------------------------------------
router.delete("/:id", authenticateToken, supprimerProduit);
//  ----------------------------------------Exporter le router--------------------------------------------------
module.exports = router;