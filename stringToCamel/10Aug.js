function toCamelCase(str) {
	let regex = /[^A-Za-z]/gi;
	let strToArray = Array.from(str);
	strToArray.forEach((letter, index) => {
		if (regex.test(letter)) {
			strToArray[index + 1] = strToArray[index + 1].toUpperCase();
		}
	});
	let newStr = strToArray.join('').replaceAll(regex, '');

	return newStr;
}

let str = 'The_Stealth-Warrior';
console.log(toCamelCase(str));
