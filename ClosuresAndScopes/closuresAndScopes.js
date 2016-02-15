// http://www.codewars.com/kata/closures-and-scopes/javascript

function createFunctions(n) {
  var callbacks = [];
for (var i=0; i<n; i++) {
    (function(i) {
      callbacks.push(function() {
        return i;	});
 	})(i); // Immediately invoked function expression(IIFE)
  }
  return callbacks;
}