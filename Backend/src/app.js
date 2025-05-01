const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/Auth');
const produitRoutes = require('./routes/Produit.Route');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended :false}))
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api', produitRoutes);

module.exports = app;
// 