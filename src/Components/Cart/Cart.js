import React from 'react';
import './Cart.css'
const Cart = ({ cart, children }) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);


    const grandTotal = totalShipping + total + parseFloat(tax);


    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Items :{quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping Price : ${totalShipping} </p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
            {children}
        </div>
    );
};



export default Cart;