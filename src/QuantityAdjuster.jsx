import './QuantityAdjuster.css';
// import { useParams } from "react-router-dom";

function QuantityAdjuster({ itemId, currentQuantity, incrementItemQuantity, decrementItemQuantity, deleteItemFromCart }) {
    
    return (
        <div className="quantity-widget">
            <button className="quantity-decrement" 
                type="button"
                onClick={() => { decrementItemQuantity(itemId) }}
                >-</button>
            <div className="quantity-value">{currentQuantity}</div>
            <button className="quantity-increment"
                type="button"
                onClick={() => { incrementItemQuantity(itemId) }}
                >+</button>
            <button className="quantity-delete"
                type="button"
                onClick={() => { deleteItemFromCart(itemId) }}
                >X</button>
        </div>
    )
}

export default QuantityAdjuster;
