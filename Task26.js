var arr1=[-3,8,7,6,5,-4,3,2,1,-5];
var arr2=[];
var min=arr1[0];
var pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]){ max=arr1[i];}
}

for (i=0;i<arr1.length;i++)
{
        for (j=0;j<arr1.length;j++)
        {
                
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                
        }
        arr2[i]=min;
        arr1[pos]="a";
        min=max;
}
console.log(arr2);
