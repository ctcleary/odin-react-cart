import './Store.css';
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import StoreItems from './StoreItems';
import StoreItem from './StoreItem';
import CartDrawer from './CartDrawer';

// Temp
import tempStoreItems from "./tempStoreItems";
import MiniCart from './MiniCart';

function Store({
        cartItems,
        setCartItems,
        storeItems,
        addItemToCart,
        incrementItemQuantity,
        decrementItemQuantity,
        deleteItemFromCart,
    }) {

    // cartItem shape: { id: 1234, quantity: 1, itemInfo: { ...storeItem } }
    // const [cartItems, setCartItems] = useState([]);
    // const [storeItems, setStoreItems] = useState([]);

    // const [attemptedLoadCartItems, setAttemptedLoadCartItems] = useState(false);
    
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);





    
    // if (loading) { return <div>Loading...</div> }
    // if (error) { return <div>An error has occurred!</div>}

    return (
        <>
            <Routes>
                <Route path="/" 
                    element={<StoreItems
                        addItemToCart={addItemToCart}
                        storeItems={storeItems} 
                        cartItems={cartItems}
                        incrementItemQuantity={incrementItemQuantity}
                        decrementItemQuantity={decrementItemQuantity}
                        deleteItemFromCart={deleteItemFromCart}
                    />}
                />
                <Route path="/:itemId"
                    element={<StoreItem 
                        addItemToCart={addItemToCart}
                        storeItems={storeItems} 
                        cartItems={cartItems}
                        incrementItemQuantity={incrementItemQuantity}
                        decrementItemQuantity={decrementItemQuantity}
                        deleteItemFromCart={deleteItemFromCart}
                    />}
                />
            </Routes>
            <CartDrawer 
                storeItems={storeItems}
                cartItems={cartItems}
                incrementItemQuantity={incrementItemQuantity}
                decrementItemQuantity={decrementItemQuantity}
                deleteItemFromCart={deleteItemFromCart}
            />
        </>
    )
}
/*
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
*/

Store.propTypes = {
    cartItemIds: PropTypes.array,
    setCartItemIds: PropTypes.func,
    storeItems: PropTypes.array,
    setStoreItems: PropTypes.func,
};

export default Store;
