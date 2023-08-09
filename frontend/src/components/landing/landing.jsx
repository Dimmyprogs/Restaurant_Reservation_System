import React, {useState} from 'react';
import { Header, Cart, Product } from '../../items';

const Landing = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    return (
        <div>
            <Header />
            <Product addToCart={addToCart}/>
            <Cart
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
                cartItems={cartItems}
            />
        </div>
    )
}

export default Landing;