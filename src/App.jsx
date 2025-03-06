import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

function App() {
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
                            element={<Store />} 
                        />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
