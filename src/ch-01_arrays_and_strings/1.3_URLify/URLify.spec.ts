import {urlify} from "./URLify";

describe('canary spec for URLify', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    });
});

describe('a urlify function', () => {
    it('should replace a space with "%20"', () => {
        expect(urlify(' ')).toBe('%20');
    });

    it('should return the same character if it is not a space', () => {
        expect(urlify('a')).toBe('a');
    });

    it('should replace each space with a "%20"', () => {
        expect(urlify('  ')).toBe('%20%20');
    });

    it('should return each non-space character', () => {
        expect(urlify('ab')).toBe('ab');
    });

    it('should return each non-space character and replace each space with a "%20"',
        () => {
            expect(urlify('a b')).toBe('a%20b');
        }
    );

    it('should accept a string and its length. This string has sufficient space at the end to hold ' +
        'space replacements with "%20"s', () => {
        expect(urlify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith');
    });
});
