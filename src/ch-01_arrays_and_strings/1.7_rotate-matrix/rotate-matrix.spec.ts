import {rotateMatrix} from "./rotate-matrix";

describe('canary spec for is rotate matrix', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a rotate matrix function', () => {
    it('should return [[4, 1], [3, 2]] after rotating [[1, 2], [3 ,4]] 90 degrees to the right',
        () => {
            const matrix = [[1, 2], [3, 4]];
            expect(rotateMatrix(matrix)).toEqual([[4, 1], [3, 2]]);
        }
    )
});
