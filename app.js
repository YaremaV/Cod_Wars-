// function reverseWords(str) {
//   const arr = [...str].reverse().join('').split(' ')
//   return arr.reverse().join(' ')
// }

// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// console.log(reverseWords('apple'));
// console.log(reverseWords('a b c d'));
// console.log(reverseWords('double  spaced  words'));

// function openOrSenior(data) {
//      const arr = [];
//     for (const value of data) {
//         if (value[0] >= 55 && value[1]>7) {
//             arr.push('Senior')
//         } else {
//             arr.push('Open')
//         }

//     }
//     return arr
// }

// return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]));
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));

// function smallEnough(a, limit){
//    return a.every((value) => value <= limit)
// }
// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))

// function scramble(str1, str2) {
//  return str1.length === str2.length
// }
// console.log(scramble('rkqodlw','world'));
// console.log(scramble('cedewaraaossoqqyt','codewars'));
// console.log(scramble('katas','steak'));
// console.log(scramble('scriptjava','javascript'));
// console.log(scramble('scriptingjava','javascript'));
// console.log(scramble('scriptsjava','javascripts'));

// function expandedForm(num) {
//   // Your code here
//    return num.toString()
//         .split("")
//         .reverse()
//         .map((a, i) => a * Math.pow(10, i))
//         .filter(a => a > 0)
//         .reverse()
//         .join(" + ");
// }
// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));

// Sort the odd
// function sortArray(array) {

//     const odds = array
//         .filter(x => x%2)
//         .sort((a, b) => a - b);

//     return array
//         .map(x => x%2 ? odds.shift() : x);

// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// console.log(sortArray([5, 3, 1, 8, 0]));
// console.log(sortArray([]));

// Split Strings
// function solution(str){

// }
// console.log(solution("abcdef"));
// console.log(solution("abcdefg"));

// console.log("ёжик"> "яблоко")

// function dashatize(num) {
//     num = Math.abs(num) + ''
//     num = num.split('').map((n, idx) => {
//         if (Number(n) != n) return n;
//         return Number(n) % 2 !== 0 ?
//             (Number(n[idx - 1]) % 2 === 0 ? '-' + n + '-' : n + '-') : n;

//     })
//     num = num.join('')
//       num = num[num.length-1] === '-' ? num.slice(0,num.length-1) : num;
//       return num;
// }

// function dashatize(num) {
//     return num.toString().
//       replace(/([13579])/g,'-$1-'). // dashes around odd digits
//       replace(/\-+/g,'-'). // replace multiple dashes by one dash
//       replace(/^\-/,''). // remove starting dash
//       replace(/\-$/,''); // remove ending dash
// }

// console.log(dashatize(274));
// console.log(dashatize(6815));

// const re = /(\w+)\s(\w+)/;
// const str = 'John Smith';
// const newstr = str.replace(re, '$2, $1');
// console.log(newstr);

// function order(words){
//     return words.split(' ').map(word => parseInt(word.replace(/[^\d]/g, '')))
//         .sort()
// }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// console.log(order(""));

// class PowerArray extends Array {
//   square() {
//     return this.map((value) => Math.pow(value, 2));
//   }

//   cube() {
//     return this.map((value) => Math.pow(value, 3));
//   }

//   average() {
//     return this.reduce((a, b) => a + b) / this.length;
//   }

//   sum() {
//     return this.reduce(function (acc, value) {
//       return acc + value;
//     });
//   }
//   even() {
//     return this.filter((value) => value % 2 === 0);
//   }
//   odd() {
//     return this.filter((value) => value % 2 !== 0);
//   }
// }

// let numbers = new PowerArray(1, 2, 3, 4, 5);

// numbers.average();

// Array.prototype.square = function () {
//   return this.map(function (n) {
//     return n * n;
//   });
// };
// Array.prototype.cube = function () {
//   return this.map(function (n) {
//     return n * n * n;
//   });
// };
// Array.prototype.average = function () {
//   return this.sum() / this.length;
// };
// Array.prototype.sum = function () {
//   return this.reduce(function (a, b) {
//     return a + b;
//   }, 0);
// };
// Array.prototype.even = function () {
//   return this.filter(function (item) {
//     return 0 == item % 2;
//   });
// };
// Array.prototype.odd = function () {
//   return this.filter(function (item) {
//     return 0 != item % 2;
//   });
// };

// function findLongestWord(string) {
//   const arr = string.split(" ");
//   for (let i = 0; i <= arr.length; i += 1) {
//     console.log(arr[i].length);
//   }
//   return arr;
// }

// // findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");

// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (value === "") {
//     delete records[id][prop];
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks")) {
//     records[id][prop].push(value);
//   } else if ((prop = "tracks" || records[id].hasOwnProperty("tracks"))) {
//     records[id][prop] = [value];
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
// updateRecords(recordCollection, 2548, "artist", "");
// updateRecords(recordCollection, 2548, "tracks", "");

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       product += arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// console.log(
//   multiplyAll([
//     [5, 1],
//     [0.2, 4, 0.5],
//     [3, 9],
//   ])
// );
// console.log(multiplyAll([[1], [2], [3]]));
// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 1;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Only change code above this line
// }

// console.log(sum([2, 3, 4], 1));

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Bob", "potato"));

// users
// const payload = [
//   {
//     key: "aaa",
//     timestamp: 1628689529,
//     name: "John",
//   },
//   null,
//   {
//     key: "bbb",
//     timestamp: 1628689731,
//     name: "Marry",
//   },
//   {
//     key: "ccc",
//     timestamp: 1628689644,
//     name: "Alex",
//   },
//   null,
// ];

// function arrToObj(arr) {
//   return arr
//     .filter((value) => {
//       return value !== null;
//     })
//     .sort((a, b) => a.timestamp - b.timestamp)
//     .reduce((value, prop) => {
//       return { ...value, [prop.key]: prop };
//     }, {});
// }

// console.log(arrToObj(payload));

/* expected output: arrToObj(payload) ->
{ 
"aaa": {
    key: 'aaa',
    timestamp: 1628689529,
    name: "John"
  },
"ccc": {
    key: 'ccc',
    timestamp: 1628689644,
    name: "Alex"
  },
"bbb":{
    key: 'bbb',
    timestamp: 1628689731,
    name: "Marry"
  },
}
*/

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// alert(sum(1)(2));
// alert(sum(3)(2));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// Метод Array.from() создаёт новый экземпляр
// Array из массивоподобного или итерируемого объекта.
// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// alert(unique(values)); // Hare,Krishna,:-O

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  // return iterable.split("").filter((v, i, a) => a.indexOf(v) === i);
  return [...new Set(iterable)];
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }

// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : [...rangeOfNumbers(startNum, endNum - 1), endNum];
// }
// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
