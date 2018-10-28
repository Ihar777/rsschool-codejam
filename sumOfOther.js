function sumOfOther(input_arr){
	var sum = 0;
	input_arr.forEach(function(element) {
		if(!Number.isInteger(element) ||
			Array.isArray(element)){
			return;
		}
  	sum += element;
	});
	let output_arr = [];
	var length = input_arr.length;
	for (let i = 0; i < length; i++){
		let arr_elem = sum - input_arr[i];
		output_arr.push(arr_elem);
	}
	return output_arr;
}

console.log(sumOfOther([1,2,3,4]));