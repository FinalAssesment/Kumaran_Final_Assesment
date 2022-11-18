
var last = (array, n)=> {
    var count = array.length;
  if (array == null) {
    return 0;}
  if (n == null) {
     return array[count - 1];}
  return array.slice(Math.max(count - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
