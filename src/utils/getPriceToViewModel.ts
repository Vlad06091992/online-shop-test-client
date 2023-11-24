export const getPriceToViewModel = (price: number) => {
    const numberStr = price.toString();
    if (numberStr.length > 0) {
        const resultStr = numberStr.charAt(0) + ' ' + numberStr.slice(1);
        return resultStr;
    } else {
        return price.toString();
    }
}