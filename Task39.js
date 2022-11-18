var string = "Hellogood$";
try {
  if(string.includes("$")){
    console.log("yes present")
}
else{
    throw "Not Present";
}
}
catch(err) {
  console.log("Error - " + err);
}
finally {
  console.log("In this code, We could know whether $ is present in the string or not.");
}
