import pricify from "./pricify";

function getTotalPrice(cartItems) {
    const total = cartItems.reduce((acc, item) => {
        return acc + (item.quantity * parseFloat(item.itemInfo.price));
    }, 0);

    return pricify(total);
}

export default getTotalPrice;