import {hasAllUniqueCharacters} from "./is-unique";

describe('canary spec for is unique', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('an is unique function', () => {
    it('should return true for the string "abcdef" that has all unique characters',
        () => {
            expect(hasAllUniqueCharacters("abcdef")).toBe(true);
        }
    );

    it('should return false for the string "abcabc" that has repeated characters', () => {
            expect(hasAllUniqueCharacters("abcabc")).toBe(false);
        }
    );
});
