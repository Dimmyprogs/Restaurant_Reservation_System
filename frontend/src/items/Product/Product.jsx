import React, {useState, useEffect} from 'react';
import './Product.css';

const Product = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Amount: #{product.amount}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;