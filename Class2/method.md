Function:
         it is a block of code that perform a spectial task ,can be invoked or called whenever we need.
         Ex:"anjan".toUpperCase()-here toUpperCase is a function


         //Arrow function

         it is compact way to writting a function
         it uses map function to retrive the backend data,filter function for filterise our data.

         syntax:
         const functionName=(parameter)=>{
          //to do the task
         }
         function calling

         function add(a,b){
          return a*b;
         }
         console.log(add(2,4))

         //Arrow Function

         const add=(a,b)=>return a*b;
         console.log(add(2,4))


        
         forEach loop

A higher-order array method specifically designed for iterating over arrays.
Simpler and more concise compared to for, but less flexible.

syntax:
array.forEach((element, index) => {
  // Process element
});

map():
   - create a new array by calling the function in every array element
   -map does not change the original array
   - it does not execute thr function for empty array

filter():
     -The filter() method in JavaScript is used to create a new array containing elements that pass a specific condition (test) provided by a callback function.


reduce():The reduce() method in JavaScript is used to reduce an array to a single value by applying a callback function on each element of the array, accumulating the result as it progresses through the array.