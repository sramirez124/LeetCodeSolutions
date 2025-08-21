/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        for (let i = 0; i < 3; i++) {
            console.log(n);
            n++;
        }
    };
};

let n = 10;
const counter = createCounter(n);
console.log(counter());

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */