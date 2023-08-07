function alphabetPosition(text) {
	let numText = '';
	let textLower = text.toLowerCase();
	//use ascii table
	const charCode = 96; // 96 for lower case, 64 for uppercase
	textLower = textLower.replace(/[^A-Za-z]/gi, '');
	for (let i = 0; i < textLower.length; i++) {
		if (i === textLower.length - 1) {
			numText += textLower[i].charCodeAt() - charCode;
			break;
		}
		numText += textLower[i].charCodeAt() - charCode + ' ';
	}
	return numText;
}

let text = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(text));
