const app = require('./src/app'); 
const express = require('express');
const connectDB = require('./src/config/database'); 
require('dotenv').config(); 
const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => { 
console.log(`Serveur démarré sur le port ${PORT}`); 
}); 
