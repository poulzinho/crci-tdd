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

    it('should return true for a word permuted palindrome of "taco cat" such as "atco cta"', () => {
        expect(isPalindromePerm('atco cta')).toBeTruthy();
    });

    it('should return true for a phrase permuted palindrome of "taco cat" such as "tact coa"', () => {
        expect(isPalindromePerm('tact coa')).toBeTruthy();
    });
});
