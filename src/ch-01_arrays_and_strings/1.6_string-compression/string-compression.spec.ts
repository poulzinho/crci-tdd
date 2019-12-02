import {stringCompression} from "./string-compression";

describe('canary spec for string compression', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a string compression function', () => {
    it('should return "a2" for a "aa"', () => {
        expect(stringCompression('aa')).toBe('a2');
    });
});
