function isPresent(arr, ele) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(isPresent(arr, 5));
