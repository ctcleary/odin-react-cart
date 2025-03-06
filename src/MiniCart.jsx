import './MiniCart.css';
// import { Link } from "react-router-dom";

const MiniCart = ({
    storeItems,
    miniCartCount,
    drawerIsShown,
    setDrawerIsShown,
}) => {
    function togggleIsShown() {
        setDrawerIsShown(!drawerIsShown)
    }

    return (
        <div className="mini-cart">
            { !storeItems.length ? (
                <></>
            ) : (
            <button type="button" onClick={togggleIsShown}>
                Cart ({miniCartCount})
            </button>
            )}
        </div>
    );
};

export default MiniCart;
