export const filterByName = (arr, name) => {
    if (!name || name === '') return arr;

    return arr.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
}

export const filterByPrice = (arr, type) => {
    if (!type) return arr;
    if (type === 'asc') {
        return arr.slice().sort((el1, el2) => el1.price - el2.price);
    } else {
        return arr.slice().sort((el1, el2) => el2.price - el1.price);
    }
};