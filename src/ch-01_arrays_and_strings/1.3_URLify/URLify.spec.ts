import {urlify} from "./URLify";

describe('canary spec for URLify', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a urlify function', () => {
    it('should replace a space in a string with "%20"', () => {
        expect(urlify(' ')).toBe('%20');
    })
});
