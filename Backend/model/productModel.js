
const { Pool } = require('pg');

const pool = new Pool({
  user: 'test',
  host: '108.181.197.186',
  database: 'rest_data',
  password: 'testmode',
  port: 10118,
});

const createProductsTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        amount NUMERIC,
        image_url VARCHAR(255)
      );
    `);
  } catch (error) {
    console.error('Error creating products table:', error);
  }
};

const insertInitialProducts = async (products) => {
  try {
    await Promise.all(products.map(async (product) => {
      await pool.query(`
        INSERT INTO products (id, name, amount, image_url)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT DO NOTHING;
      `, [product.id, product.name, product.amount, product.image_url]);
    }));
    console.log('Products inserted successfully.');
  } catch (error) {
    console.error('Error inserting initial products:', error);
  }
};

module.exports = {
  createProductsTable,
  insertInitialProducts,
};
