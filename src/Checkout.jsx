// import { useParams } from "react-router-dom";

import CartItem from "./CartItem";

function Checkout({
        cartItems,
        setCartItems,
        storeItems,
        addItemToCart,
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
        </>
    )
}

export default Checkout;
