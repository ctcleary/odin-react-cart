function pricify(num) {
    let numStr = '$'+num;
    const dotIdx = numStr.indexOf('.');
    if (dotIdx === -1) {
        numStr = numStr +'.00';
    } else if (numStr.slice(dotIdx+1).length === 1) {
        numStr = numStr + '0';
    }
    return numStr;
}

export default pricify;