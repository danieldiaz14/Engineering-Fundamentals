function bubblesort(data) {
	let swapped = true;
	while(swapped) {
		swapped = false;
		for (let i = 0; i < data.length; i++) {
			if (data[i] > data[i+1]) {
				let temp = data[i];
				data[i] = data[i+1];
				data[i+1] = temp;
				swapped = true;
			}
		}
	}
	return data;
}