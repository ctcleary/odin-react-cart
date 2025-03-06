import { useState } from 'react';
import './CartDrawer.css';
import CartItem from './CartItem';
import pricify from './pricify';
import getTotalPrice from './getTotalPrice';
import { Link } from 'react-router-dom';

const CartDrawer = ({
    cartItems,
    incrementItemQuantity,
    decrementItemQuantity,
    deleteItemFromCart,
    drawerIsShown,
    setDrawerIsShown
}) => {
        

    function toggleShown() {
        setDrawerIsShown(!drawerIsShown);
    }



    return (
        <div className={drawerIsShown ? "cart-drawer" : "cart-drawer minimized"}>
            <div className="cart-drawer-header">
                <button onClick={toggleShown} id="cart-drawer-toggle" type="button">
                    {drawerIsShown ? <>&gt;&gt;</> : <>&lt;&lt;</> }
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
                <div className="cart-drawer-total">Total: {getTotalPrice(cartItems)}</div>
                <div className="cart-drawer-checkout">
                    {/* <button type="button">Checkout</button> */}
                    <Link className="checkout-link" to="/store/checkout">Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
