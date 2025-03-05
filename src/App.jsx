import { useEffect, useState } from 'react'
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import MiniCart from './MiniCart';
import Checkout from './Checkout';

import tempStoreItems from "./tempStoreItems";

// const useFetchedStoreItems = () => {
//   const [itemData, setItemData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Skip actual fetching during development.
//   // -----
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => {
//         if (response.stats >= 400) {
//           throw new Error('Server error');
//         }

//         return response.json();
//       })
//       .then((json) => {
//           console.log('itemData json', json);
//           setItemData(json);
//       })
//       .catch((error) => { setError(error) })
//       .finally(() => setLoading(false));
//   }, []);


//   return { itemData, error, loading };
// }

function App() {
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
        //         loadStoredCartItems(tempStoreItems);
        //         setAttemptedLoadCartItems(true);
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
        if (attemptedLoadCartItems) {
            console.log('storeCartItems useEffect');
            storeCartItems();
        }
    }, [cartItems]);

    const miniCartCount =  cartItems.reduce((acc, item) => {
            return acc + item.quantity;    
        }, 0);

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

    return (
        <div id="wrapper">
            <header id="top-header-container">
                <div id="top-header-contents">
                    <h1>The Odin Project - React Shopping Cart App</h1>
                </div>
            </header>
            <div id="nav-container">
                <div id="nav-contents">
                    <nav id="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <MiniCart miniCartCount={miniCartCount} />
                    </nav>
                </div>
            </div>
            <div id="main-container">
                <div id="main-contents">
                    <Routes>
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/store/*"
                            element={<Store 
                                miniCartCount={miniCartCount}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                storeItems={storeItems}
                                addItemToCart={addItemToCart}
                                incrementItemQuantity={incrementItemQuantity}
                                decrementItemQuantity={decrementItemQuantity}
                                deleteItemFromCart={deleteItemFromCart}
                            />} 
                        />
                        <Route path="/checkout/*"
                            element={<Checkout
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                storeItems={storeItems}
                                addItemToCart={addItemToCart}
                                incrementItemQuantity={incrementItemQuantity}
                                decrementItemQuantity={decrementItemQuantity}
                                deleteItemFromCart={deleteItemFromCart}
                            />}
                        />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
