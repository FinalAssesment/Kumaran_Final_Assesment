//Multi Params, Multi line
const value = (a, b) => {
    const val = 10;
    return a + b + val;
  };
  console.log(value(2,4));
  
  //Single param, Single Line
  const sayHi = (name) => "Hi " + name 
  console.log(sayHi("Kumaran"));
  
  //No Param, Single line
  const a = () => "No Parameters"
  console.log(a())
  