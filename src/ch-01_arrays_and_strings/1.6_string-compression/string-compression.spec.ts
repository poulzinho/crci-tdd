import {stringCompression} from "./string-compression";

describe('canary spec for string compression', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a string compression function', () => {
    it('should return "a2" for "aa"', () => {
        expect(stringCompression('aa')).toBe('a2');
    });

    it('should return "ab" for "a1b1"', () => {
        expect(stringCompression('ab')).toBe('a1b1');
    });

    it('should return "aab" for "a2b1"', () => {
        expect(stringCompression('aab')).toBe('a2b1');
    });

    it('should return "aabcccccaaa" for "a2b1c5a3"', () => {
        expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    });
});
