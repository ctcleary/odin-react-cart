// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import pricify from "./pricify";

function StoreItems({ storeItems }) {

    return (
        <>
        <p>(Store items...)</p>
        <div className="store-items-gallery">
            { !storeItems || !storeItems.length ? (
                <p>Loading...</p>
            ) : (
                storeItems.map((item) => {
                    return (
                        <Link 
                            to={`./${item.id}`}
                            className="item-card"
                            key={item.id}
                        >
                            <div className="image-container">
                                <img src={item.image} />
                            </div>
                            <p className="item-id">--ID: {item.id}--</p>
                            <p className="item-name">{item.title}</p>
                            <p className="item-price">{pricify(item.price)}</p>
                        </Link>
                    )
                })
            )}
        </div>
        </>
    )
}

export default StoreItems;
