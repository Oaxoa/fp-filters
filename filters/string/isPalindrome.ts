/**
 * Returns true if a string is palindrome. Because, why not?
 */
export const isPalindrome = (arg: string) => {
	// A loop should be faster than idiomatic implementations (time and space wise) therefore no fp here
	for (let i = 0; i < arg.length / 2; i++) {
		if (arg[i] !== arg[arg.length - i - 1]) {
			return false;
		}
	}
	return true;
};
