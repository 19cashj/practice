/*

This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
  let arr = [];
  let split = s.split("");
  split.forEach((e, i) => {
    arr.push(e.toUpperCase());
    for (j = 0; j < i; j++) {
      arr.push(e.toLowerCase());
    }
    if (i !== split.length - 1) {
      arr.push("-");
    }
  });
  return arr.join("");
}
