remove = (array, n)=>
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove([2, 5, 9, 6], 5));
