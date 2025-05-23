const jwt = require('jsonwebtoken');

 const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token)
        return res.status(401).json({
        message: 'Access refuse , pas de token ' });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) 
              return res.status(403).json({
        message: 'Token invalide' });
        req.utilisateur = utilisateur;
        next();
    });
 };
 module.exports = authenticateToken