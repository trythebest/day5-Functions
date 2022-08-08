//duplicate
let arrs=["mani",1,"mani",2,3,4]

let dup=function(arr){
    return arr.filter((value,index)=>arr.indexOf(value)===index)
}


console.log(dup(arr));

//median
let median= function(arr,arr1){
    let add=[...arr,...arr1];
    let mid= Math.floor(add.length/2);
    let find = add.sort((a,b)=>a-b);
    return(add % 2 !==0 ? find[mid]:Math.round((find[mid-1]+find[mid])/2))
}
console.log(median([1,3,5,7],[2,4,6,8]));


 //to find odd number.


 let odd=[];

 let mani=function(arr){
  for(var i=0;i<arr.length;i++)
  {
   if(arr[i]%2!==0){
   odd.push(arr[i]);
   }
  }return(odd);
  
 
 }
 console.log(mani([1,2,3,4,5,6]));

 //palindrome
 let arr=[12,11,22,23,33,34,"madam"];
let st;
let b=[];

let pal=function(arr){
for(var i=0; i<arr.length;i++)
{
  st=arr[i]+"";
  
  if(arr[i]==st.split("").reverse().join(""))
  {
    b.push(arr[i])
    }
  }return b;
}
pal(arr);

//prime number

let prime=[]
let Mani=function(arr){
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
}
console.log(Mani([2,3,4,5,6,7,8,9]));

// rotate k times
const rotate = function(arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
  
    return arr;
  }
  console.log(rotate([1,2,3,4],2))


  //sum of array
  
let sum=0;
let MANI=function(arr){
 for(let i=0;i<arr.length;i++){
   sum= arr[i]+sum;
}return(sum);
  
  }
  
  console.log(MANI([1,2,3]));

  //title case

  let Caps=function(m) {
    m = m.toString().toLowerCase().split(" ");
    for (var i = 0; i < m.length; i++) {
      m[i] = m[i].charAt(0).toUpperCase() + m[i].slice(1);
    }
    return m;
  }
  console.log(Caps(["mani kandan n"]));