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

//^ outside of a character set, searches for patterns at the beginning of strings
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); //returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //returns false

// Repeat operator +, match characters that appear one or more times in a row
let abc = "abc";
let abca = "abca";
let aabc = "aabc";
let abcregex = /a+/g
abc.match(abcregex) //returns ["a"]
abca.match(abcregex) //returns ["a", "a"]
aabc.match(abcregex) //returns ["aa"] (this is where its useful)

// Zero or more times *, like the repeat + but also includes zero or more
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); //returns ["goooooooo"]
gPhrase.match(goRegex); //returns ["g"]
oPhrase.match(goRegex); //returns null

// Lazy matching, ? at the end
// Important concept of regex is greedy and lazy mode. If in greedy mode, it matches as much of the string as possible. If lazy it matches as little as possible 
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex); //returns <h1> tags

// $ match ending string pattern
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //returns false

// Match all letters and numbers + underscore shortcut with \w (equal to [A-Za-z0-9_])
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames); //all return true
// Note that there is a shortcut for the inverse of \w, \W
// There is also a shortcut for only numbers with \d (equal to [0-9]) (also has an inverse \D)

// Match whitespace with \s
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // returns [" ", " "].
//Inverse of whitespace would be \S

//Quantity specifiers with {}
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); //returns true
multipleA.test(A2); //returns false

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/; //can also specify with only a lower limit
multipleA.test(A4); //true
multipleA.test(A2); //false
multipleA.test(A100); //true

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/; //can also specify an exact number
multipleHA.test(A4); //false
multipleHA.test(A3); //true
multipleHA.test(A100); //false

// All or none with ?
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true

// Positive and negative lookaheads
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); //returns ["q"]
noquit.match(qRegex); //returns ["q"]

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); //returns true

//Mixed grouping with parentheses ()
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); //returns true

//Capture groups enclosed by ()
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/; //(\w+) is the capture group and is stored into a variable based on the number it appeared, so \1
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

//Replace method
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); //returns the string The sky is blue.