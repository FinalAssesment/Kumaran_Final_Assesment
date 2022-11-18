var d = new Date(); 
d.getHours(); 
d.getMinutes(); 
d.getSeconds();
day = d.getDay();
 var list = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today-is : " + list[day]);
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  // For AM or PM
  var end = (hour >= 12)? " PM ":" AM ";
  // For 1 PM, 2 PM, etc and not 13 PM, 14 PM
  hour = (hour >= 12)? hour - 12: hour;
  // For 12 NOON
  if (hour===0 && end===' PM ') 
  { 
    hour=12;
          if (minute===0 && second===0)
          { 
          end=' Noon';
          } 
          else
          { 
          end=' PM';
          } 
  } 
  // For 12 AM MIDNIGHT
  if (hour===0 && end===' AM ') 
         { 
         hour=12;
         if (minute===0 && second===0)
         { 
         end=' Midnight';
         } 
         else
         { 
         end=' AM';
         } 
  } 
console.log("Current Time : "+ hour + end + " : " + minute + " : " + second);
