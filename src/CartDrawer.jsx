import PropTypes from 'prop-types';
import './CartDrawer.css';
import CartItem from './CartItem';
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
                    <Link className="checkout-link" to="/store/checkout">Checkout</Link>
                </div>
            </div>
        </div>
    );
};

CartDrawer.propTypes = {
    cartItems: PropTypes.array,
    incrementItemQuantity: PropTypes.func,
    decrementItemQuantity: PropTypes.func,
    deleteItemFromCart: PropTypes.func,
    drawerIsShown: PropTypes.bool,
    setDrawerIsShown: PropTypes.func,
}

export default CartDrawer;
