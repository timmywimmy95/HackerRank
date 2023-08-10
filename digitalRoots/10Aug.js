function digitalRoot(n) {
	let arrayOfDigits = Array.from(String(n), Number);
	let sum = 0;

	if (n === 0) {
		return 0;
	}

	if (arrayOfDigits.length > 1) {
		arrayOfDigits.forEach((num) => (sum += num));
		if (sum > 9) {
			return digitalRoot(sum);
		}
		return sum;
	}
}

let n = 0;
console.log(digitalRoot(n));
