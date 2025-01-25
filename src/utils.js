export const isValidTitle = (value) => {
    return value.trim() !== '' && value.trim().length >= 3;
}

export const isValidRate = (value) => {
    const rate = Number(value);
    return  value !== '' && !isNaN(rate) && rate >= 1 && rate <= 10;
}