var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freq = 1;
var count = 0;
var item;
for (i=0; i<arr1.length; i++)
{
        for (j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                {
                 count++;}
                if (freq<count)
                {
                  freq=count; 
                  item = arr1[i];
                }
        }
        count=0;
}
console.log(item+" ( " +freq +" times ) ") ;
