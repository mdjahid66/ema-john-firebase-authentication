import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        < div className="shop-container">
            <div className="products-container">
                {products.map((product) => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to='/orders'>
                        <button>Review Order</button>
                    </Link> */}
                    <button onClick={() => navigate("/orders")}>Review Order</button>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;