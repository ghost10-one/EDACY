
const Produit = require("../models/Produit.Model");

//  ----------------------------------------Ajouter un produit--------------------------------------------------
const ajouterProduit = async (req, res) => {
  try {
    const { nom, description, image, prix, quantite } = req.body;
    const produit = new Produit({ nom, description, image, prix, quantite });
    const savedProduit = await produit.save();
    res.status(201).json(savedProduit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
//  ----------------------------------------Afficher tous les produits--------------------------------------------------
const afficherProduits = async (_, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//  ----------------------------------------Afficher un produit par ID--------------------------------------------------
const afficherProduitParId = async (req, res) => {
  const id = req.params.id;
  try {
    const produit = await Produit.findById({_id:id});
    if (!produit)
        return res.status(404).json({ 
       message: "Produit non trouvé" });
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({
        message: error.message });
  }
}
//  ----------------------------------------Modifier un <produit-------------------------------------------------->
const modifierProduit = async (req, res) => {
  try {
    const id =req.params.id
    const { nom, description,image , prix, quantite } = req.body;
    const produit = await Produit.findByIdAndUpdate(
      {id},
      { nom, description, prix,image , quantite,categorie },
      { new: true }
    );s
    if (!produit)
       return 
      res.status(404).json({ message: "Produit non trouvé" });
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//  ----------------------------------------Supprimer un produit--------------------------------------------------
const supprimerProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit)
        return res.status(404).json({
        message: "Produit non trouvé" });
    res.status(200).json({ 
       message: "Produit supprimé avec succès" });
  } catch (error) {
    res.status(500).json({
        message: error.message });
  }
}
//  ----------------------------------------Routes--------------------------------------------------
module.exports = {ajouterProduit, afficherProduits, afficherProduitParId, modifierProduit, supprimerProduit};