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
});
