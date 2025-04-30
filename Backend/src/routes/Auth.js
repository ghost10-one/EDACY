const express = require('express');

 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcrypt');
 const Utilisateur = require('../models/Utilisateur.Model');
 const router = express.Router();
const authenticateToken = require('../middleware/Auth.Middleware');


//  ----------------------------------------Inscription utilisateur--------------------------------------------------
 
router.post('/register', async (req, res) => {
    try {
        const { prenom , nom , email , password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const utilisateur = new Utilisateur({prenom , nom , email , password: hashedPassword });
        const savedUtilisateur  = await Utilisateur.save();
        res.status(201).json(savedUtilisateur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 });

//  ----------------------------------------Connexion utilisateur--------------------------------------------------
 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const utilisateur = await Utilisateur.findOne({ email });
        if (!utilisateur) return res.status(404).json({
               message: 'Utilisateur non trouve' });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({
               message: 'Mot de passe incorrect' });

        const token = jwt.sign({ id: utilisateur._id, email: utilisateur.email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    
 });
 module.exports = router;
