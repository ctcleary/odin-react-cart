import './Store.css';
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import StoreItems from './StoreItems';
import StoreItem from './StoreItem';

// Temp
import tempStoreItems from "./tempStoreItems";

function Store() {
    const [cartItemIds, setCartItemIds] = useState([]);
    const [storeItems, setStoreItems] = useState([]);
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then((response) => {
        //         if (response.stats >= 400) {
        //         throw new Error('Server error');
        //         }
        
        //         return response.json();
        //     })
        //     .then((json) => {
        //         console.log('itemData json', json);
        //         setStoreItems(json);
        //     })
        //     .catch((error) => { setError(error) })
        //     .finally(() => { setLoading(false) });

        setTimeout(() => {
            console.log('set temp store items');
            setStoreItems(tempStoreItems);
        }, 1000);
    }, []);

    // useEffect(() => {
    //     fetchStoreItems();
    // }, []);


    
    // if (loading) { return <div>Loading...</div> }
    // if (error) { return <div>An error has occurred!</div>}

    return (
        <>
            <h1>Store Page</h1>
            <p>Store contents.</p>
            <Routes>
                <Route path="/" 
                    element={<StoreItems storeItems={storeItems} />}
                />
                <Route path="/:itemId"
                    element={<StoreItem storeItems={storeItems} />}
                />
            </Routes>
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
