import { useEffect, useState } from 'react'
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import MiniCart from './MiniCart';

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
    const [miniCartCount, setMiniCartCount] = useState(0);

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
                                setMiniCartCount={setMiniCartCount}
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
