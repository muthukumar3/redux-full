
const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

var oldchars = [];
for (let index = 0; index < 4; index++) {
    oldchars.push(chars[index]);
    let str = oldchars.toString();
    let revers = str.split('').reverse().join('');
    str = str.substring(1);
    // console.log(revers + str);
}


let arr = [
    { id: 1, age: 12, name: 'Manu' },
    { id: 2, age: 24, name: 'Quincy' },
    { id: 3, age: 22, name: 'Abbey' },
  ];

  let ages = arr.map(ar => ar.age);
// console.log(ages);


arr.forEach(ar => ar.age+=10);
// console.log(arr);

let young = arr.filter(ar => ar.age >= 30 );
// console.log(young);

let allAge = arr.reduce((accumulatedValue, ar) => accumulatedValue + ar.age, 0 );
// console.log(allAge);



(function outerFunction() {
    var name = 'Muthu';

    function insserFn() {
        console.log(name);
    }
    insserFn();
})();



