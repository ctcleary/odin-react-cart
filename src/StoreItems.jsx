// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import pricify from "./pricify";
import QuantityAdjuster from "./QuantityAdjuster";
import CartDrawer from "./CartDrawer";
import RatingStars from "./RatingStars";
import PropTypes from "prop-types";

function StoreItems({
    storeItems,
    cartItems,
    addItemToCart,
    incrementItemQuantity,
    decrementItemQuantity,
    deleteItemFromCart,
    drawerIsShown,
    setDrawerIsShown,
}) {

    return (
        <>
        <div className="store-items-gallery">
            { !storeItems || !storeItems.length ? (
                <p>Loading...</p>
            ) : (
                storeItems.map((item) => {
                    return (
                        <div key={item.id} className="item-card">
                            { cartItems.find(cartItem=>cartItem.id===item.id)?.quantity > 0 ? (
                                <QuantityAdjuster 
                                    itemId={item.id}
                                    currentQuantity={cartItems.find(cartItem=>cartItem.id===item.id)?.quantity || 0}
                                    incrementItemQuantity={incrementItemQuantity}
                                    decrementItemQuantity={decrementItemQuantity}
                                    deleteItemFromCart={deleteItemFromCart}
                                    withDelete={false}
                                />
                            ): (
                                <button type="button" className="add-item"
                                    onClick={() => addItemToCart(item.id)}
                                >
                                    <span className="add-item-text">
                                        +
                                    </span>
                                </button>
                            )}
                            <Link 
                                to={`./${item.id}`}
                                className="item-card-link"
                            >
                                <div className="image-container">
                                    <img src={item.image} />
                                </div>
                                <p className="item-id">--ID: {item.id}--</p>
                                <p className="item-name">{item.title}</p>
                                <RatingStars rating={item.rating.rate} ratingCount={item.rating.count} />
                                <p className="item-price">{pricify(item.price)}</p>
                            </Link>
                        </div>
                    )
                })
            )}
        </div>
        <CartDrawer
                storeItems={storeItems}
                cartItems={cartItems}
                incrementItemQuantity={incrementItemQuantity}
                decrementItemQuantity={decrementItemQuantity}
                deleteItemFromCart={deleteItemFromCart}
                drawerIsShown={drawerIsShown} 
                setDrawerIsShown={setDrawerIsShown}
            />
        </>
    )
}

StoreItems.propTypes = {
    storeItems: PropTypes.array,
    cartItems: PropTypes.array,
    addItemToCart: PropTypes.func,
    incrementItemQuantity: PropTypes.func,
    decrementItemQuantity: PropTypes.func,
    deleteItemFromCart: PropTypes.func,
    drawerIsShown: PropTypes.bool,
    setDrawerIsShown: PropTypes.func,
}

export default StoreItems;
