function compact2(array) {
    let index = -1;
    const result = [];
    const length = array === undefined ? 0 : array.length;

    while (++index < length) {
        if (array[index]) {
            result.push(array[index]);
        }
    }
    return result;
}

console.log(compact2(["Ariful", false, true, null, undefined, "mery", false]));
