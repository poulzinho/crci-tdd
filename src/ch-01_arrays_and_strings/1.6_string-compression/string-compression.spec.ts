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

    it('should return "ab" for "ab"', () => {
        expect(stringCompression('ab')).toBe('ab');
    });

    it('should return "aab" for "a2b"', () => {
        expect(stringCompression('aab')).toBe('a2b');
    });
});
