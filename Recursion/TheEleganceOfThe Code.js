// http://www.codewars.com/kata/the-elegance-of-the-code/javascript

function factorial(num) {
var result=0;
 	if (num == 0) {
 	 	result = 1;
  	} else {
     	 result = num * factorial(num - 1); // recursive call(function calling itself)
    }
return result;
}