import './CartItem.css';
import pricify from "./pricify";
import QuantityAdjuster from './QuantityAdjuster';

function CartItem({ item, incrementItemQuantity, decrementItemQuantity, deleteItemFromCart }) {
    
    return (
        <div className="cart-item">            
            <div className="cart-item-image-container">
                <img src={item.itemInfo.image} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-id">--ID: {item.itemInfo.id}--</div>
                <div className="cart-item-name">{item.itemInfo.title}</div>
                <div className="cart-item-rating">Rating: {item.itemInfo.rating.rate} / 5 <span className="item-rating-count">({item.itemInfo.rating.count})</span></div>
                {/* <div className="cart-item-description">{item.description}</div> */}
            </div>
            <div className="cart-item-price-info">
                <QuantityAdjuster
                    itemId={item.id}
                    currentQuantity={item.quantity}
                    incrementItemQuantity={incrementItemQuantity}
                    decrementItemQuantity={decrementItemQuantity}
                    deleteItemFromCart={deleteItemFromCart}
                />
                {/* <div className="cart-item-quantity-widget">
                    <button className="cart-item-quantity-decrement" 
                        type="button"
                        onClick={() => { decrementItemQuantity(item.id) }}
                        >-</button>
                    <div className="cart-item-quantity">{item.quantity}</div>
                    <button className="cart-item-quantity-increment"
                        type="button"
                        onClick={() => { incrementItemQuantity(item.id) }}
                        >+</button>
                    <button className="cart-item-quantity-delete"
                        type="button"
                        onClick={() => { deleteItemFromCart(item.id) }}
                        >X</button>
                </div> */}
                <div className="cart-item-price">{pricify(item.itemInfo.price * item.quantity)}</div>
            </div>
        </div>
    )
}

/*
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
*/

export default CartItem;
