import {canary} from "./canary";

describe('canary', () => {
    it('should check if the Jest setup is working', () => {
        expect(true).toBeTruthy();
    });

    it('should check if a canary test passes', () => {
        expect(canary).toBe('canary works!!!');
    })
});
