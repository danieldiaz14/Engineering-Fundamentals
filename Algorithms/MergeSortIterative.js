const mergeSort = (data) => {
	//gets the entire array
	if (data.length < 2) {
		return data;
	}
	
	var midPoint = Math.round(data.length / 2);
		//an index that is the middle of the array and tells it where to stop
	return merge(
		mergeSort(data.slice(0, midPoint)),
		//starting the first element til the midPoint(half).
		mergeSort(data.slice(midPoint))
		// starting at the midpoint and going til the end.(second half)
		//call to merge sort
		);
		
		
}

const merge = (left, right) => {
	var out = [];
	while (left.length && right.length) {
		out.push(left[0] < right[0] ? left.shift() : right.shift());
	}
	
	while (left.length) {
		out.push(left.shift());
	}
	
	while (right.length) {
		out.push(right.shift());
	}
	
	return out;
}