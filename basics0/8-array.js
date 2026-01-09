//array
const arr2 = ["hello", "world", 42, true];
console.log(typeof arr2);

const myarr = new Array(0, 1, 3, 4, 5, 10, 7);
// 0 1  2  3  4
// console.log(myarr);
// console.log(myarr.length);
// console.log(myarr[0]);
// console.log(myarr[myarr.length - 1]);
// myarr.push(7);
// myarr.unshift(0);
// myarr.shift();
// myarr[5] = 10;
// myarr.pop();
// console.log(myarr.indexOf(3)); // if element not found returns -1
console.log(myarr);
console.log(myarr.slice(3, 4)); // does not include 4th index
console.log(myarr.splice(3, 4)); // removes 2 elements from index 1

console.log(myarr);

const MarbelHeroes = [
  "ironman",
  "spiderman",
  "thor",
  "hulk",
  "captain america",
];
const DcHeroes = ["batman", "superman", "flash", "aquaman"];

// MarbelHeroes.push(DcHeroes);
// console.log(MarbelHeroes[5][0]);
const allHeroes = MarbelHeroes.concat(DcHeroes);

const byheros = [...MarbelHeroes, ...DcHeroes, ...myarr];

console.log(byheros);
console.log(allHeroes);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [44, 5]]];
// console.log(another_array[6][0]);
// console.log(another_array[5][1][0]);
console.log(another_array[5][2][0]);

const newnewarray = another_array.flat(Infinity);
console.log(newnewarray);

console.log(Array.isArray("saugat"));
console.log(Array.isArray(another_array));

console.log(another_array.includes(7));

console.log(Array.from("saugat"));
console.log(Array.from({ name: "saugat" }));
console.log(Array.of(1, 2, 3, 4, 5));
