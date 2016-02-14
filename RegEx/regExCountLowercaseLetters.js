// http://www.codewars.com/kata/regex-count-lowercase-letters/javascript

function lowercaseCount(str){
  return str.length - str.replace(/[a-z]/g, '').length;
}