let s = 'anagram';
let t = 'nagaram';
const isAnagram = (s, t) => {
	//select first letter in S.
	let sArray = s.split('');
	let tArray = t.split('');
	let sIndexRun;
	sArray.forEach((sLetter, sIndex) => {
		if (tArray.includes(sLetter)) {
			tArray.indexOf(sLetter);
			tArray.splice(tArray.indexOf(sLetter), 1);
			sIndexRun = sIndex;
			return;
		}
	});
	return sIndexRun === sArray.length - 1 && tArray.length === 0
		? true
		: false;
};

console.log(isAnagram(s, t));
