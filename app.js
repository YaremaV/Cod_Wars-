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


function scramble(str1, str2) {
 return str1.length === str2.length
}
console.log(scramble('rkqodlw','world'));
console.log(scramble('cedewaraaossoqqyt','codewars'));
console.log(scramble('katas','steak'));
console.log(scramble('scriptjava','javascript'));
console.log(scramble('scriptingjava','javascript'));
console.log(scramble('scriptsjava','javascripts'));