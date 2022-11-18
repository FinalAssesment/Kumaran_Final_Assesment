
var find_more_avg = (arr) =>{
    var sum=0;
    for(var i=0;i<10;i++){
        sum+=arr[i];
    }
    var avg = sum/10;
    var count=0;
    for(var i=0;i<10;i++){
       if(arr[i]>avg){
           count++;
       }
    }
    var perc = (count / 10)*100;
    console.log(perc);
    }
    
    generate_freq = (arr)=>{
        var k;
        var count=0;
        var newarr=[26];
        for(var i=0;i<26;i++){
            for(var j=0;j<26;j++){
                if(arr[j]==i){
                    count++;
                }
            }
            newarr[i] = count;
            count=0;
            console.log(newarr[i]);
        }
    }
    
    find_more_avg([12,18,25,24,2,5,18,20,20,21]);
    generate_freq([12,18,25,24,2,5,18,20,20,21]);
    