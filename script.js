var isDate = function (input) {
  //   write your code here
	if ( input !== new Date()){
		return true;
	elif (input === "YYYY-MM-DD"){
		return true;
	}elif(input !== isDate){
		return false;
    }
    }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
