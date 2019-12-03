import {stringCompression} from "./string-compression";

describe('canary spec for string compression', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a string compression function', () => {
    it('should return "aa" for "aa" since compression "a2" is not smaller', () => {
        expect(stringCompression('aa')).toBe('aa');
    });

    it('should return "ab" for "ab" since compression "a1b1" is not smaller', () => {
        expect(stringCompression('ab')).toBe('ab');
    });

    it('should return "aab" for "aab" since compression "a2b1" is not smaller', () => {
        expect(stringCompression('aab')).toBe('aab');
    });

    it('should return "a2b1c5a3" for "aabcccccaaa" since it is compressed', () => {
        expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    });
});
