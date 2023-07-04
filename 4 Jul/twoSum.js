let nums = [2, 11, 8, 7];
let target = 9;

var twoSum = function (nums, target) {
	let num1;
	let num2;
	let ans;

	for (let i = 0; i < nums.length; i++) {
		num1 = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			num2 = nums[j];
			// console.log(num1, num2);
			if (num1 + num2 === target) {
				ans = [i, j];
				break;
			}
		}
	}
	return ans;
};

console.log(twoSum(nums, target));
