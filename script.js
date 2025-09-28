//your JS code here. If required.
function daysOfAYear(year){
	let isLeap=false;
	if(year%400===0 || (year%4===0 && year%100!==0)) isLeap=true
	return isLeap?366:365;
}
