var isDate = function (input) {
  //   write your code here
	if ( isDate === new Date()){
		return true;
	elif (isDate === "YYYY-MM-DD"){
		return true;
	}else{
		return false;
    }
    }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
