let age=22;
console.log(age);
console.log(typeof age)

let name="Ankita";
console.log(name);
console.log(typeof name)


const a=null;
console.log(a);
console.log(typeof a)//object

let b;
console.log(b)
console.log(typeof b)

let c=true;
console.log(c)
console.log(typeof c)


let x=BigInt("567")
console.log(x);//567n
console.log(typeof (x))//bigInt

let y=Symbol("Hello");
console.log(y)//Symbol("Hello")
console.log(y.description)//Hello
console.log(typeof y)//Symbol


//non primitive datatype

let arr=[1,2,3,4,5,6]

console.log( typeof arr)

console.log(arr)
console.log(arr[2])

//object
let student={
 name:"Anjan",
  roll:11,
  age:22,
  dist:"Balasore"
};
console.log(student.name)
console.log(student)
console.log( typeof student)


//function
function my_schedule(){
console.log("10Am-Good morning")
console.log("11.30-College tim")
console.log("3PM-Coaching tim")
console.log("7Pm-cooking Tim");
console.log("12Am-Study tim")
}
my_schedule()

function addTwo(a,b){
  return a+b;
}
console.log(addTwo(3,4))
console.log((11,18))


console.log(Math.floor(10/3))
console.log(10/3)