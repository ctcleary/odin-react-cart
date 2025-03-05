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
import Checkout from './Checkout';

function Store({ miniCartCount, setMiniCartCount }) {

    // cartItem shape: { id: 1234, quantity: 1, itemInfo: { ...storeItem } }
    const [cartItems, setCartItems] = useState([]);
    const [storeItems, setStoreItems] = useState([]);

    const [attemptedLoadCartItems, setAttemptedLoadCartItems] = useState(false);
    
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
            loadStoredCartItems(tempStoreItems);
            setAttemptedLoadCartItems(true);
        }, 1000);
    }, []);

    useEffect(() => {
        setMiniCartCount(cartItems.reduce((acc, item) => {
            return acc + item.quantity;    
        }, 0));
    }, [cartItems, setMiniCartCount])

    useEffect(() => {
        if (attemptedLoadCartItems) {
            console.log('storeCartItems useEffect');
            storeCartItems();
        }
    }, [cartItems]);

    function storeCartItems() {
        localStorage.setItem(
            'cartItems', 
            JSON.stringify(cartItems.map((cartItem) => {
                return { id: cartItem.id, quantity: cartItem.quantity};
            }))
        );
    }
    
    function loadStoredCartItems(storeItems) {
        console.log('loadStoredCartItems');
        const stored = localStorage.getItem('cartItems');
        if (!stored) {
            return;
        }

        const parsedStored = JSON.parse(stored);
        console.log('loadStoredCartItems doLoad', parsedStored);
        const loadedCartItems = [];
        parsedStored.forEach((storedItem) => {
            loadedCartItems.push(
                { id: storedItem.id, quantity: storedItem.quantity, itemInfo: storeItems.find(item => item.id === storedItem.id) }
            );
        });

        setCartItems(loadedCartItems);
    }

    function addItemToCart(itemId) {
        console.log('addItemToCart', itemId);
        const found = cartItems.find((item) => item.id === itemId );
        if (found) {
            incrementItemQuantity(itemId);
            return;
        }

        const newCartItem = { id: itemId, quantity: 1, itemInfo: storeItems.find(item => item.id === itemId) };
        setCartItems([
            ...cartItems,
            newCartItem
        ]);
    }

    function incrementItemQuantity(itemId) {
        const found = cartItems.find((item) => item.id === itemId );
        if (!found) {
            addItemToCart(itemId);
            return;
        }

        setCartItems(
            cartItems.map((item) => {
                return item.id !== itemId ? item :
                    { id: itemId, quantity: item.quantity + 1, itemInfo: item.itemInfo };
            })
        )
    }

    function decrementItemQuantity(itemId) {
        console.log('decrementItemQuantity', itemId);
        const found = cartItems.find((item) => item.id === itemId );

        if (!found) {
            return;
        }

        // If the current quantity is 1, remove it from the cart.
        if (found.quantity === 1) {
            console.log('quantity 1');
            setCartItems(
                cartItems.filter((item) => {
                    return item.id !== itemId;
                })
            );
            return;
        }

        // Otherwise just decrement the quantity
        setCartItems(
            cartItems.map((item) => {
                return item.id !== itemId ? item :
                    { id: itemId, quantity: item.quantity - 1, itemInfo: item.itemInfo };
            })
        )
    }

    function deleteItemFromCart(itemId) {
        console.log('deleteItemFromCart', itemId);
        setCartItems(
            cartItems.filter((item) => {
                return item.id !== itemId;
            })
        );
    }


    
    // if (loading) { return <div>Loading...</div> }
    // if (error) { return <div>An error has occurred!</div>}

    return (
        <>
            <MiniCart miniCartCount={miniCartCount} />
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
                <Route path="/checkout"
                    element={<Checkout
                        cartItems={cartItems}
                        incrementItemQuantity={incrementItemQuantity}
                        decrementItemQuantity={decrementItemQuantity}
                        deleteItemFromCart={deleteItemFromCart}
                    />}
                />
            </Routes>
            {/* <CartDrawer 
                storeItems={storeItems}
                cartItems={cartItems}
                incrementItemQuantity={incrementItemQuantity}
                decrementItemQuantity={decrementItemQuantity}
                deleteItemFromCart={deleteItemFromCart}
            /> */}
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
