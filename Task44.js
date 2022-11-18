const myObject = {
    a: 'truestring',
    b: 4,
    c: false
  };
  console.log(Object.values(myObject));
  console.log(Object.keys(myObject));
  
  for (const key in myObject) {
     console.log(`${key}: ${myObject[key]}`);
  }
  