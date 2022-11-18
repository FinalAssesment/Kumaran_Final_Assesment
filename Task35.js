var a;  
var count=0;
a = setInterval(fun = ()=>{
         count += 1;
    if(count === 5){
        clearInterval(a);
    }
var rand = Math.floor((Math.random() * 255) + 1);
    console.log("Current Stock Price is : "+rand);
}, 3000);
