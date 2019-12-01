import {oneAway} from "./one-away";

describe('canary spec for one away', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a one away function', () => {
    it('should check if a string is one removed character away from another string. ' +
        'For example, this is true for "pale" and "ple".', () => {

        expect(oneAway('pale', 'ple')).toBeTruthy;
    });
});
