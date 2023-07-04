//Contains duplicate

nums = [1, 2, 3, 4];

var containsDuplicate = function (nums) {
	let s = new Set(nums);

	if (s.size !== nums.length) {
		return true;
	}
	return false;
};

containsDuplicate(nums);
