export function uniqueArray(arr = []) {
    return arr.filter((element, index) => arr.indexOf(element) !== index);
}