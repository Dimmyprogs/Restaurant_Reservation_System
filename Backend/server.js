const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { createProductsTable, insertInitialProducts } = require('./model/productModel');

const app = express();
const port = 3001;

app.use(cors());
app.use('/api', productRoutes);

(async () => {
  createProductsTable();
  
  const products = [
    
  ];
  
  insertInitialProducts(products);
})();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
