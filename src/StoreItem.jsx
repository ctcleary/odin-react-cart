import CartDrawer from './CartDrawer';
import QuantityAdjuster from './QuantityAdjuster';
import RatingStars from './RatingStars';
import './StoreItem.css';
// import { useEffect } from "react";
import { useParams } from "react-router-dom";

function StoreItem({
    storeItems,
    cartItems,
    incrementItemQuantity,
    decrementItemQuantity,
    deleteItemFromCart,
    drawerIsShown,
    setDrawerIsShown,
}) {
    const params = useParams();

    console.log('StoreItem storeItems', storeItems);
    const item = storeItems.find((item) => {
        return item.id === parseInt(params.itemId, 10);
    });
    console.log('StoreItem item', item);

    return (
        <>
            { !item ? (
                <p>Item not found!</p>
            ) : (
                <div className="store-item">
                    <div className="store-item-image-container">
                        <img src={item.image} />
                    </div>
                    <div className="store-item-info">
                        <QuantityAdjuster 
                            itemId={item.id}
                            currentQuantity={cartItems.find(cartItem=>cartItem.id===item.id)?.quantity || 0}
                            incrementItemQuantity={incrementItemQuantity}
                            decrementItemQuantity={decrementItemQuantity}
                            deleteItemFromCart={deleteItemFromCart}
                            withDelete={true}
                            isLarge={true}
                        />
                        <div className="store-item-id">--ID: {item.id}--</div>
                        <div className="store-item-name">{item.title}</div>
                        {/* <div className="store-item-rating">Rating: {item.rating.rate} / 5 <span className="item-rating-count">({item.rating.count})</span></div> */}
                        <RatingStars rating={item.rating.rate} ratingCount={item.rating.count} />
                        <div className="store-item-description">{item.description}</div>
                    </div>
                </div>
            )}
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

export default StoreItem;
