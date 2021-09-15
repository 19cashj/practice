const unaryParent = (theFirstArgument) => { //currying allows a function to remain unary while still utilizing multiple arguments
    return (theSecondArgument) => { //arguments 2 and 3 are defined in return statements
        return (theThirdArgument) => {
            return `${theFirstArgument} + ${theSecondArgument} + ${theThirdArgument}`;
        } //and the last statement in the chain returns the operation performed
    }
}

const result = unaryParent("first")("second")("third") //arguments are now splt by parentheses instead of commas
console.log(result);