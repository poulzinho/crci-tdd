import {urlify} from "./URLify";

describe('canary spec for URLify', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a urlify function', () => {
    it('should replace a space with "%20"', () => {
        expect(urlify(' ')).toBe('%20');
    });

    it('should return the same character if it is not a space', () => {
        expect(urlify('a')).toBe('a');
    })
});
