/*

The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can subscribe to an event (known as a 'subject') 
and get notified when the event occurs (or when the subject sends a signal).

This pattern is the cornerstone of event driven programming.

*/

function Subject() {
    this.observers = [] //array of observer functions
    this.subscribe = (fn) => {
        this.observers.push(fn)
    }
    this.unsubscribe = (fn) => {
        this.observers = this.observers.filter(fnToRemove => {
            if(fn != fnToRemove) {
                return fn;
            }
        })
    }
    this.fire = (fn) => {
        this.observers.forEach(fn => {
            fn();
        })
    }
}

const subject = new Subject();

function Observer1() {
    console.log("Observer 1 Firing")
}

function Observer2() {
    console.log("Observer 2 Firing")
}

subject.subscribe(Observer1); //Both observers subscribed
subject.subscribe(Observer2);
subject.fire(); //Fire will call both functions subscribed to the observer

subject.unsubscribe(Observer2); //Observer 2 unsubscribed
subject.fire(); //Only observer 1 will fire because observer 2 unsubscribed