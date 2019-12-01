import {oneAway} from "./one-away";

describe('canary spec for one away', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a one away function', () => {
    it('should check if a string is one removed character away from another string. ' +
        'For example, this is true for "pale" and "ple". ' +
        'Same for "pale" and "pal".', () => {

        expect(oneAway('pale', 'ple')).toBeTruthy();
        expect(oneAway('pale', 'pal')).toBeTruthy();
        expect(oneAway('pales', 'pale')).toBeTruthy();
        expect(oneAway('paleso', 'pale')).toBeFalsy();
    });

    it('should check if a string is one added character from another string', () => {
        expect(oneAway('ple', 'pale')).toBeTruthy();
        expect(oneAway('pal', 'pale')).toBeTruthy();
        expect(oneAway('pale', 'pales')).toBeTruthy();
        expect(oneAway('pale', 'paleso')).toBeFalsy();
    });

    it('should check if a string is one replaced character from another string', () => {
        expect(oneAway('pale', 'bale')).toBeTruthy();
        expect(oneAway('pale', 'bake')).toBeFalsy();
    });
});
