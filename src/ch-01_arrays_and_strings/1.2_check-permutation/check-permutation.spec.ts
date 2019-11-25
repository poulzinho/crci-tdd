import {checkPermutation} from "./check-permutation";

describe('canary spec for is check permutation', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a check permutation function', () => {
    it('should return true for "aba" and "aab"', () => {
        expect(checkPermutation('aba', 'aab')).toBeTruthy();
    });

    it('should return false if the strings have different lengths', () => {
        expect(checkPermutation('aba', 'aaba')).toBeFalsy();
        expect(checkPermutation('aba', 'aa')).toBeFalsy();
    });

    it('should return true for "aba" and "baa"', () => {
        expect(checkPermutation('aba', 'baa')).toBeTruthy();
    });

    it('should return false for "aba" and "abb"', () => {
        expect(checkPermutation('aba', 'abb')).toBeFalsy();
    })
});
