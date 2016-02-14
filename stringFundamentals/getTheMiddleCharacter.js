// http://www.codewars.com/kata/get-the-middle-character/javascript

function getMiddle(s){
   return s.length % 2 === 0 ? s.slice( s.length/2 -1 , s.length/2 + 1)  : s.charAt(s.length/ 2).slice() ;
   // Condition==> checks whether the given string is of even or odd length.
}