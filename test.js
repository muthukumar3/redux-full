
// const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

// var oldchars = [];
// for (let index = 0; index < 4; index++) {
//     oldchars.push(chars[index]);
//     let str = oldchars.toString();
//     let revers = str.split('').reverse().join('');
//     str = str.substring(1);
//     // console.log(revers + str);
// }


// let arr = [
//     { id: 1, age: 12, name: 'Manu' },
//     { id: 2, age: 24, name: 'Quincy' },
//     { id: 3, age: 22, name: 'Abbey' },
//   ];

//   let ages = arr.map(ar => ar.age);
// // console.log(ages);


// arr.forEach(ar => ar.age+=10);
// // console.log(arr);

// let young = arr.filter(ar => ar.age >= 30 );
// // console.log(young);

// let allAge = arr.reduce((accumulatedValue, ar) => accumulatedValue + ar.age, 0 );
// // console.log(allAge);



// (function outerFunction() {
//     var name = 'Muthu';

//     function insserFn() {
//         // console.log(name);
//     }
//     insserFn();
// })();

// function person(obj) {
//     console.log(this, obj);
// }

// const object = {
//     val1 : "Name 1",
//     val2 : "Name 2",
//     val3 : "Name 3"
// }
// const personbind = person.bind(object, ['GHJK','saG','QWE']);
// // setTimeout(personbind, 10);


// const someObj = {
//     name : "Muthu",
//     age : "26",
//     email : "muthukumar@gmail.com" 
// }

// function randomfn(one) {
//     // console.log(this, one);
// }

// const randomfnrtn = randomfn.bind(someObj, [ 'One' , 'Two' ]);
// setImmediate(randomfnrtn);




// function Debouncing(func, timeout = 1000) {
//     let timer;
//     return (...args) => {
//         timer = setTimeout(() => {func.apply(this, args)}, timeout);
//     }
// }

// function basicFn() {
//     console.log(this);
// }

// const debouncingFn = Debouncing(() => basicFn() );
// debouncingFn();


/*
    HCL Interview 
*/ 

// const a = [1,2,3,4,5];
// const b = a.map((item) => {
//     return item/2 == 0  
// });
// console.log(b);

// var ab = 90;
// function abc() {
//     console.log(ab);
//     ab = 21;
// }
// abc();


/*
It does't return anything, it loops every array
*/
const numbers = ['45','5','12','36','81','18', '18'];
var text = "";
numbers.forEach((value, index, itself) => { 
    text += itself + "-";
});

/*
It does return everything as a new array
*/
const numbers2 = numbers.map((value, index, array) => {
    return value / 2 == 0;
}); 
// console.log(numbers2);

/*
It does return as new arra, if only condition satisfied
*/
const numbers3 = numbers.filter((value, index) => {
    return value >= 18;
});
// console.log(numbers3);

/*
It does return single value, it used to get sum of all elements 
*/
const numbers4 = numbers.reduce((total, value) => {
    return total + value;
}, 12);
// console.log(numbers4);

/*
It does return true or false based on condition that matches all araays
*/
const numbers5 = numbers.every((value, index) => {
    return value >= 5;
});
// console.log(numbers5);

/*
It does return true or false based on condition that matches any one value passes a test
*/
const numbers6 = numbers.some((value, index) => {
    return value > 18;
});
// console.log(numbers6);

/*
It does return single value of index num based on given value, and it gives the first index
*/
const numbers7 = numbers.indexOf('81');
// console.log(numbers7);

/*
It does return single value of index num based on given value, and it gives the last matching values index
*/
var numbers8 = numbers.lastIndexOf('18');
// console.log(numbers8);

/*
It does return first value of matching the condition
*/
numbers8 = numbers.find((value, index) => {
    return value > 18;
});
// console.log(numbers8);

/*
It does return index of matching the condition 
*/
numbers8 = numbers.findIndex((num) => {
    return num > 18;
});
// console.log(numbers8);

/*
It's just like a foreach, but it return key, value pars.
*/
for (let x of numbers.entries()) {
    // console.log(x);
}

/*
It check the value exist or not in an array, and return true or false
*/
numbers8 = numbers.includes('5');
// console.log(numbers8);





















