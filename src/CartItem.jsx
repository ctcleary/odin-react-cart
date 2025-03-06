import PropTypes from 'prop-types';
import './CartItem.css';
import pricify from "./pricify";
import QuantityAdjuster from './QuantityAdjuster';
import RatingStars from './RatingStars';

function CartItem({
    item,
    incrementItemQuantity,
    decrementItemQuantity,
    deleteItemFromCart
}) {
    
    return (
        <div className="cart-item">            
            <div className="cart-item-image-container">
                <img src={item.itemInfo.image} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-id">--ID: {item.itemInfo.id}--</div>
                <div className="cart-item-name">{item.itemInfo.title}</div>
                <RatingStars rating={item.itemInfo.rating.rate} ratingCount={item.itemInfo.rating.count} />
            </div>
            <div className="cart-item-price-info">
                <QuantityAdjuster
                    itemId={item.id}
                    currentQuantity={item.quantity}
                    incrementItemQuantity={incrementItemQuantity}
                    decrementItemQuantity={decrementItemQuantity}
                    deleteItemFromCart={deleteItemFromCart}
                    withDelete={true}
                />
                <div className="cart-item-price">{pricify(item.itemInfo.price * item.quantity)}</div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
    incrementItemQuantity: PropTypes.func,
    decrementItemQuantity: PropTypes.func,
    deleteItemFromCart: PropTypes.func
}

export default CartItem;
