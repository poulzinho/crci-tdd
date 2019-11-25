import {hasAllUniqueCharacters} from "./is-unique";

describe('canary spec for is unique', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('an is unique function', () => {
    it('should determine if a string has all unique characters', () => {
            expect(hasAllUniqueCharacters("abcdef")).toBe(true);
            expect(hasAllUniqueCharacters("abcabc")).toBe(false);
        }
    );
});
