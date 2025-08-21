 /**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let newInit = init;
    return {
        increment: function() {
            newInit++;
            return newInit;
        },
        reset: function() {
            newInit = init;
            return newInit;
        },
        decrement: function() {
            newInit--;
            return newInit;
        }
    }
};
let n = 5;
counter = createCounter(n);
console.log("Increment of " + n + " is "+ counter.increment());
console.log("Reset of " + n + " is "+ counter.reset());
console.log("Decrement of " + n + " is "+ counter.decrement());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */