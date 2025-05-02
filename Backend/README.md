

📦 Fonctionnalités principales : Afficher les produits (liste depuis MongoDB via API Express).

Ajouter un produit (nom, description, prix, catégorie, quantité, image).

Modifier un produit (édition de chaque champ avec enregistrement dans la base).

Supprimer un produit.

Navigation fluide avec React Router.
🌐 Backend (Express.js + Node.js) : Routes REST :

GET /api/afficherProduits – tous les produits.

GET /api/afficherProduitParId/:id – un seul produit.

POST /api/ajouterProduit – ajouter un produit.

PUT /api/modifierProduitParId/:id – modifier un produit.

DELETE /api/supprimerProduitParId/:id – supprimer un produit.

Connexion à MongoDB via Mongoose.

Middleware : express.json() pour parser les données JSON.
