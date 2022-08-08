//duplicates


(function(arrs){
    return(arrs.filter((value,index)=>arrs.indexOf(value)===index));
    
})([1,2,3,4,6,2,4]);


//median
(function median(arr,arr1){
    let add=[...arr,...arr1];
    let mid= Math.floor(add.length/2);
    let find = add.sort((a,b)=>a-b);
    let result=(add % 2 !==0 ? find[mid]:Math.round((find[mid-1]+find[mid])/2))
    console.log(result)
})([1,3,5,7],[2,4,6,8]);

//oddnumber


let odd=[];

(function find(arr){
 for(var i=0;i<arr.length;i++)
 {
  if(arr[i]%2!==0){
  odd.push(arr[i]);
  }
 }console.log(odd);
 

})([1,2,3,4,5,6]);


//palindrome
let arr=[12,11,22,23,33,34,"madam"];
let mani;
let b=[];

(function pal (arr){
for(var i=0; i<arr.length;i++)
{
  mani=arr[i]+"";
  
  if(arr[i]==mani.split("").reverse().join(""))
  {
    b.push(arr[i])
    }
  }console.log(b);
})(arr);


//prime number

let prime=[];
(function number (array){
  for (let i = 0; i < array.length; i++) {
    let flag = 0;

    
    for (let j = 2; j <array[i]; j++) 
    {
        if (array[i] % j == 0) 
        {
          flag++;  
        }
    }

    
    if (array[i] > 1 && flag == 0)
    {
        prime.push(array[i]);
    }
  } return (prime);
})([2,3,4,5,6,7,8,9]);
console.log(prime);

//rotate array

(function rotate (arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
  
    console.log(arr);
  })([1,2,3,4],2)

  
  //sum of array
  
let sum=0;
(function add (arr){
 for(let i=0;i<arr.length;i++){
   sum= arr[i]+sum;
}console.log(sum);
  
  })([1,2,3]);

  //title case
  (function(m) {
    m = m.toString().toLowerCase().split(" ");
    for (var i = 0; i < m.length; i++) {
      m[i] = m[i].charAt(0).toUpperCase() + m[i].slice(1);
    }
    console.log(m);
  })(["mani kandan n"]);
