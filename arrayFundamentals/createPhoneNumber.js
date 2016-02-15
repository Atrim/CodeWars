// http://www.codewars.com/kata/create-phone-number/javascript

function createPhoneNumber(numbers){
  return "("+numbers.slice(0, 3).join('')+")"+" "+numbers.slice(3, 6).join('')+"-"+numbers.slice(6, 10).join('');

}