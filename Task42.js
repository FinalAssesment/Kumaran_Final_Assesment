function checkDate(dateString){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
          
    // Match the date format through regular expression      
    if(dateString.match(dateformat))
    {      
        let operator = dateString.split('/');      
      
        // Extract the string into month, date and year      
        let data = [];      
        data = dateString.split('/');      
       //extracting month, day, year part from date
        let month= parseInt(data[0]);     
        let day = parseInt(data[1]);      
        let year = parseInt(data[2]);      
             
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];     
        if (month==1 || month>2)
        {      
            if (day>ListofDays[month-1])
            {      
                ///This check is for Confirming that the date is out of its range of that particular month      
                return false;      
            }      
        }
        else if (month==2)
        {      
            let leapYear = false;      
           if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) 
           {      
                leapYear = true;   
            }    
            if((leapYear==true) && (day<=29))
            {    
                return true;   
            } 
            if((leapYear==true) && (day>29))
            {      
                return false;      
            }
            if ((leapYear == false) && (day>=29))
            {      
                return false;      
            }
            else
            {
                return false;
            }
     
        }      
    }
    else
    {      
        return false;      
    }      
    return true;      
} 

var check = checkDate("02/29/2021");    
console.log(check);
