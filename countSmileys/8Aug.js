function countSmileys(arr) {
	let count = 0;
	arr.forEach((face) => {
		let regex = /[:'][-~]?[)D]/;
		if (regex.test(face)) {
			count++;
		}
	});
	return count;
}

function countSmileys(arr) {
	const regExp = /[:;][-~]?[)D]/;
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (regExp.test(arr[i])) {
			count++;
		}
	}
	return count;
}

let arr = [';oD', ';D', ';o)'];
console.log(countSmileys(arr));
