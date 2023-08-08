function longest(s1, s2) {
	// your code
	let newStr = s1 + s2;
	newStr = new Set(newStr);
	newStr = [...newStr].sort().join('');
	return newStr;
}

let s1 = 'asdasdasd';
let s2 = 'jkkuiykyjmhgesdas';

console.log(longest(s1, s2));
