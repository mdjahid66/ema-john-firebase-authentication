import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');



    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = { name, address, phoneNumber }

        console.log(shipping);

    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleName} type="name" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" name="email" id="" required disabled />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handlePhoneNumber} type="number" names="phoneNumber" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className="form-submit" type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;