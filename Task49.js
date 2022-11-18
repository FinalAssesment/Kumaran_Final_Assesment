const numbers = [175, 50, 25];
// Reduce - picks value from first to last element (1,2,3)
let reducesum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
// Reduce right - picks value from last to first element (3,2,1)
let reducerightsum = numbers.reduceRight(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(reducesum);
console.log(reducerightsum);
