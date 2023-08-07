function solution(str) {
	let newArr = [];
	if (str.length % 2 !== 0) {
		str = str + '_';
	}
	for (let i = 0; i < str.length; i += 2) {
		newArr.push(str.slice(i, i + 2));
	}
	return newArr;
}
