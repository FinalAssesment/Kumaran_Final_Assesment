function move(arr, from, to) {
    while (from < 0) {
        from += arr.length;
    }
    while (to < 0) {
        to += arr.length;
    }
    arr.splice(to, 0, arr.splice(from, 1)[0]);  
   return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));
