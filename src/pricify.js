function pricify(num) {
    return parseFloat(num).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export default pricify;