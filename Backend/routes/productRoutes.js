
const express = require('express');
const { Pool } = require('pg');
const { createProductsTable, insertInitialProducts } = require('../model/productModel');

const router = express.Router();

const pool = new Pool({
  user: 'test',
  host: '108.181.197.186',
  database: 'rest_data',
  password: 'testmode',
  port: 10118,
});

router.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
