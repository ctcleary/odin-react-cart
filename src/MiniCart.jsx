import PropTypes from 'prop-types';
import './MiniCart.css';
// import { Link } from "react-router-dom";

const MiniCart = ({
    miniCartCount,
    drawerIsShown,
    setDrawerIsShown,
}) => {
    function togggleIsShown() {
        setDrawerIsShown(!drawerIsShown)
    }

    return (
        <div className="mini-cart">
            <button type="button" onClick={togggleIsShown}>
                Cart ({miniCartCount})
            </button>
        </div>
    );
};

MiniCart.propTypes = {
    miniCartCount: PropTypes.func,
    drawerIsShown: PropTypes.bool,
    setDrawerIsShown: PropTypes.func,
}

export default MiniCart;
