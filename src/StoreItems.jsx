// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import pricify from "./pricify";

function StoreItems({ storeItems, addItemToCart }) {

    return (
        <>
        <p>(Store items...)</p>
        <div className="store-items-gallery">
            { !storeItems || !storeItems.length ? (
                <p>Loading...</p>
            ) : (
                storeItems.map((item) => {
                    return (
                        <div key={item.id} className="item-card">
                            <button type="button" className="add-item">
                                <span className="add-item-text"
                                    onClick={() => addItemToCart(item.id)}
                                >
                                    +
                                </span>
                            </button>
                            <Link 
                                to={`./${item.id}`}
                                className="item-card-link"
                            >
                                <div className="image-container">
                                    <img src={item.image} />
                                </div>
                                <p className="item-id">--ID: {item.id}--</p>
                                <p className="item-name">{item.title}</p>
                                <p className="item-rating">Rating: {item.rating.rate} / 5 <span className="item-rating-count">({item.rating.count})</span></p>
                                <p className="item-price">{pricify(item.price)}</p>
                            </Link>
                        </div>
                    )
                })
            )}
        </div>
        </>
    )
}

export default StoreItems;
