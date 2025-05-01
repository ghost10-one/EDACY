const app = require('./src/app'); 
const connectDB = require('./src/config/database'); 
require('dotenv').config(); 
connectDB(); 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
console.log(`Serveur démarré sur le port ${PORT}`); 
}); 