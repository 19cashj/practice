/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

function pigIt(str) {
  let split = str.split(" ");
  let arr = [];
  split.forEach((e, i) => {
    if (/[.,:!?]/.test(e)) {
      arr.push(e);
    } else {
      let first = e.charAt(0);
      arr.push(e.slice(1) + first + "ay");
    }
  });
  return arr.join(" ");
}
