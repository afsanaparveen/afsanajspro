
array=["ramu","geeta","sita","mala"];
array.reduce(function largest_string(a,b)
{
    return a.length>b.length?a:b;  //reduce method

});


 array=["ramu","geeta","sita","mala"];
 function largest_string(a,b)
 {
    return a.length>b.length?a:b;
 }   
 array.filter(largest_string) 
   //filter method

