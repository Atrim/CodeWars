// http://www.codewars.com/kata/number-of-occurrences/javascript

Array.prototype.numberOfOccurrences = function(item) {
var drr = []; // Empty array
var i = 0 ;
   for(i = 0 ; i < this.length ; i++) {
       if(item=== this[i]){
       		drr.push(this[i]); // looping through the item and pushing the same number of occurrences into the empty array.
       }
   }
    return drr.length;

}