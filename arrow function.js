// odd number

let odd=[];

let mani=(arr)=>{
    for(var i=0;i<arr.length;i++)
    {
     if(arr[i]%2!==0){
     odd.push(arr[i]);
     }
    }
    return(odd)
}
 
    
console.log(mani([1,2,3,4,5,6]));


//palindrome

let emty;
let b=[];

let pal=((arr)=>{
for(var i=0; i<arr.length;i++)
{
  emty=arr[i]+"";
  
  if(arr[i]==emty.split("").reverse().join(""))
  {
    b.push(arr[i])
    }
  }return b;
});
console.log(pal([12,11,22,23,33,34,"madam"]));


//prime number

let prime=[]
let emtys=((arr)=>{
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;

    
    for (let j = 2; j <arr[i]; j++) 
    {
        if (arr[i] % j == 0) 
        {
          flag++;  
        }
    }

    
    if (arr[i] > 1 && flag == 0)
    {
        prime.push(arr[i]);
    }
  } return (prime);
});
console.log(emtys([2,3,4,5,6,7,8,9]));


//sum of array

let sum=0;
let empty=((arr)=>{
 for(let i=0;i<arr.length;i++){
   sum= arr[i]+sum;
}return(sum);
});
 console.log(empty([1,2,3]));


 // title caps
 let emptys=((m)=> {
    m = m.toString().toLowerCase().split(" ");
    for (var i = 0; i < m.length; i++) {
      m[i] = m[i].charAt(0).toUpperCase() + m[i].slice(1);
    }
    return m;
  });
  console.log(emptys(["mani kandan n"]));