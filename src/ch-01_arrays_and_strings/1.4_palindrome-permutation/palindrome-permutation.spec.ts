import {isPalindromePerm} from "./palindrome-permutation";

describe('canary spec for palindrome permutation', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a palindrome permutation function', () => {
    it('should return true for a palindrome such as "taco cat"', () => {
        expect(isPalindromePerm('taco cat')).toBeTruthy();
    });
});
