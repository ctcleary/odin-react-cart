import PropTypes from 'prop-types';
import './QuantityAdjuster.css';
// import { useParams } from "react-router-dom";

function QuantityAdjuster({
    itemId, 
    currentQuantity, 
    incrementItemQuantity, 
    decrementItemQuantity, 
    deleteItemFromCart, 
    withDelete,
    isLarge
}) {
    
    return (
        <div className={ isLarge ? "quantity-widget quantity-widget-large" : "quantity-widget" }>
        { withDelete && (
            <button className="quantity-delete"
                type="button"
                onClick={() => { deleteItemFromCart(itemId) }}
                >X</button>
        )}
            <button className="quantity-decrement" 
                type="button"
                onClick={() => { decrementItemQuantity(itemId) }}
                >
                    { !withDelete && currentQuantity === 1 ? <>X</> : <>-</> }
                </button>
            <div className="quantity-value">{currentQuantity}</div>
            <button className="quantity-increment"
                type="button"
                onClick={() => { incrementItemQuantity(itemId) }}
                >+</button>
        </div>
    )
}

QuantityAdjuster.propTypes = {
    itemId: PropTypes.number,
    currentQuantity: PropTypes.number,
    incrementItemQuantity: PropTypes.func, 
    decrementItemQuantity: PropTypes.func, 
    deleteItemFromCart: PropTypes.func, 
    withDelete: PropTypes.bool,
    isLarge: PropTypes.bool
}

export default QuantityAdjuster;
