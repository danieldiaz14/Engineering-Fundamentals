function fibbonaci(n) {
	if(n === 0) {
		return 1;
	}
	return n * fibbonaci(n-1);
}