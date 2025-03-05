import { useState } from 'react';
import './CartDrawer.css';
import CartItem from './CartItem';

const CartDrawer = ({ cartItems, incrementItemQuantity, decrementItemQuantity, deleteItemFromCart }) => {
    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown(!isShown);
    }

    return (
        <div className={isShown ? "cart-drawer" : "cart-drawer minimized"}>
            <div className="cart-drawer-header">
                <button onClick={toggleShown} id="cart-drawer-toggle" type="button">
                    {isShown ? <>&gt;&gt;</> : <>&lt;&lt;</> }
                </button>
                <h2 className="cart-drawer-headline">Cart</h2>
            </div>
            <div className="cart-drawer-items">
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
            <div className="cart-drawer-checkout-container">
                <button className="cart-drawer-checkout" type="button">Checkout</button>
            </div>
        </div>
    );
};

export default CartDrawer;
