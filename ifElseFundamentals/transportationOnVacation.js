// http://www.codewars.com/kata/transportation-on-vacation/javascript

function rentalCarCost(d) {

var total = d * 40;   
	if(d >= 3 && d < 7) {    // 3 or more and less than 7
		total = (d * 40 -20) ;
	}else if(d >= 7){		// 7 or more
		total =(d * 40- 50);
	}else {		// less than 3
		total = ( d* 40);
	}
return total;
}