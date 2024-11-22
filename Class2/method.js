console.log("anjan")
function myFunction(){
  for(let i=0;i<5;i++){
    console.log("Hey Anjan Kumar Das")
  }
}
myFunction()

function addTwo(){
  let a=8,b=9;
  return a+b;
}
console.log(addTwo())
function addThree(a,b,c){
 // return a+b;//5
 return a+b+c;//NaN

}
console.log(addThree(2,3,9))//14
console.log(addThree(2,3))

//create a function using function keyword that takes a string as an argument and return number of vowel

function countVowel(name){
  let count=0,consonant=0;
  
  for(let i=0;i<name.length;i++){
    let char=name[i].toUpperCase();
    if(char=='A'|| char=='E'|| char=='I'|| char=='O' || char=='U' ){
      count++;
    }
  }
  return  count,consonant;
}
console.log(countVowel("Ankita"))
console.log(countVowel("Virat"))
console.log(countVowel("Rohit"))
console.log(countVowel("Aeiouaeiou"))


//Arrow Function 

function add(a,b){
  return a*b;
 }
 console.log(add(2,4))

 //Arrow Function

 const addd=(a,b)=>{
  return a*b;

 }
 console.log(addd(2,4))

 //ForEach
 let arr=[1,2,3,4,5,6,7];
 arr.forEach((val)=>{
  console.log(val*val)
 })


 //map
 let arr1=[1,2,3,4,5,6];
 let result=arr1.map(num=>num+num)
 console.log(result)

 let arr2=[1,2,3,4,5,6];
 let newArr=arr2.map((val)=>{
  return val*val;
 })
 console.log(newArr)

 //filter()

 let arr3=[9,7,5,3,2];
 let ans=arr3.filter((val)=>{
  return val%2===0;
 })
 console.log(ans)