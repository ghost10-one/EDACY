const express = require('express');
dotenv.config();
const dotenv = require('dotenv');

const cors = require('cors');
const authRoutes = require('./routes/Auth');
const produitRoutes = require('./routes/Produit.Route');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/produits', produitRoutes);

