// Get undefined variable. 
let pakhi;
console.log(pakhi); //undefined as there is no value
//if any function does not return any thing then it will be undefined.
function add(num1, num2){
    console.log(num1 + num2);//this line will return the sum
}
const result = add(13, 20);
console.log(result);//this line will return undefined
// if we don't pass a argument for a perameter  then it'll also be undefined
function fun1(num1, num2){
    console.log(num1, num2);
    return num1, num2;
}
fun1(13);//here as we didn't pass any argument for 2nd perametere , it'll also be undefined

//if any object doesn't have the property which have been called will return undefined
const premik = {name:"smart dude", phone:0191029298};
console.log("prmiker gf ache kina? " + premik.gf);//it will be undefined as the property gf doesn't exist.

//undefined is a reserved word. now if i define any variable as undefined it will be undefined. but it's not recommended

let fun = undefined;
console.log(fun);
//if an array has nth items and i'm searching for n+1 th items thn it will b undefined
let ages = [2, 3, 6];
console.log(ages[8]);// here ages has 3 element but i'm searching for 8th no item , so it'll b undefined

