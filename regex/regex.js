// Test method
let testStr = "Coding is fun";
let testRegex = /Coding/;
testRegex.test(testStr); //returns true
// Without any other flags, Coding would be the literal string and any other variations such as "coding" would not pass

// OR | operator
let testStr2 = "I like dogs"
let testRegex2 = /dogs|cats|frogs/
testRegex.test(testStr); //returns true

//i flag, ignore case sensitivity
let testStr3 = "CoDiNg is fun";
let testRegex3 = /coding/i;
testRegex.test(testStr); //returns true

//Match method, for extracting matches in an array
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); //returns ["expressions"]

//g flag, for searching or matching more than once
let testStr4 = "Repeat, Repeat, Repeat";
let ourRegex4 = /Repeat/g;
testStr.match(ourRegex); //returns ["Repeat", "Repeat", "Repeat"]

//You can have multiple flags on your regex like /search/gi

//Wildcard, which can take place of any character in a string
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr); //both return true

//Character classes, match any characters inside brackets regardless of where they are in the string
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); //returns ['e','a','e','o','u','i','e','a','o','e','o','e','I','a','e','o','o','e','i','o','e','o','i','e','i']

//Character range, placed inside character class, all characters inside the range
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); //returns ["cat"]
batStr.match(bgRegex); //returns ["bat"]
matStr.match(bgRegex); //returns null
//Also works with numbers ([0-9]) and can be combined ([a-z0-9])

//Negated character set ^, the inverse of matching characters, instead matches every character except the ones specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result) // returns [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]

// Repeat operator +, match characters that appear one or more times in a row
let abc = "abc";
let abca = "abca";
let aabc = "aabc";
let abcregex = /a+/g
abc.match(abcregex) //returns ["a"]
abca.match(abcregex) //returns ["a", "a"]
aabc.match(abcregex) //returns ["aa"] (this is where its useful)