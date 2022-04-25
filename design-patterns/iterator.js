/*

The Iterator pattern is a pattern that allows you to effectively loop over a collection of objects. 
A common programming task is to traverse and manipulate a collection of objects. 
These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. 
In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized 'iterator'!

*/

const items = [1, "string", false, 1.24];

function Iterator(items) {
    this.items = items;
    this.index = 0;
    this.hasNext = function() {
        return this.index < this.items.length
    }
    this.next = function() {
        return this.items[this.index++]
    }
}


const iter = new Iterator(items)
console.log(iter.next()); // 1
console.log(iter.next()); // string
console.log(iter.next()); // false
console.log(iter.hasNext()); // true



/*
function IteratorReverse(items) {
    this.items = items;
    this.index = items.length - 1;
}

IteratorReverse.prototype = {
    hasNext: function() {
        return this.index >= 0;
    },
    next: function() {
        return this.items[this.index--];
    }
}

const iterBackwards = new IteratorReverse(items)
while(iterBackwards.hasNext()) {
    console.log(iterBackwards.next())
} */