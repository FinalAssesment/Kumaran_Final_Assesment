const numbers = [175, 50, 25];
// Addition
//const initialValue = 0;
const add = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
//Subtraction
const subtract = numbers.reduce(
  (previousValue, currentValue) => previousValue - currentValue
);
//Average
const avg = (numbers = []) => {
   const reducer = (acc, value, index, arr) => {
      let val = acc + value;
      if (index === arr.length - 1) {
         return val / arr.length;
      };
      return val;
   };
   const res = numbers.reduce(reducer, 0);
   return res;
};
console.log(subtract);
console.log(add);
console.log(avg(numbers));
