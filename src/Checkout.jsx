import './Checkout.css';
import getTotalPrice from './getTotalPrice';
import CartItem from "./CartItem";

function Checkout({
        cartItems,
        incrementItemQuantity,
        decrementItemQuantity,
        deleteItemFromCart,
    }) {
    
    return (
        <>
            <h1>Checkout</h1>
            <div className="checkout-items">
            {
                !cartItems.length ? (
                    <div>No items</div>
                // ) : cartItems.map((cartItem) => {
                //     return (
                //         <div className="cart-item" key={cartItem.id}>
                //             {cartItem.itemInfo.title}
                //         </div> 
                //     );
                //     }
                // )
                ) : cartItems.map((cartItem) => {
                        return (
                            <CartItem key={cartItem.id}
                                item={cartItem}
                                incrementItemQuantity={incrementItemQuantity}
                                decrementItemQuantity={decrementItemQuantity}
                                deleteItemFromCart={deleteItemFromCart}
                            /> 
                        );
                    }
                )
            }
            </div>
            <div className="checkout-total">
                Total: {getTotalPrice(cartItems)}
            </div>
            <div className="checkout-checkout">
                <button type="button">Checkout</button>
            </div>
        </>
    )
}

export default Checkout;
