import {rotateMatrix} from "./rotate-matrix";

describe('canary spec for is rotate matrix', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBeTruthy();
    })
});

describe('a rotate matrix function', () => {
    it('should return [[3, 1], [4, 2]] after rotating [[1, 2], [3 ,4]] 90 degrees to the right',
        () => {
            const matrix = [[1, 2], [3, 4]];
            expect(rotateMatrix(matrix)).toEqual([[3, 1], [4, 2]]);
        }
    );

    it('should return [[1, 3], [2, 4]] after rotating [[1, 2], [3 ,4]] 90 degrees to the left',
        () => {
            const matrix = [[1, 2], [3, 4]];
            expect(rotateMatrix(matrix, "left")).toEqual([[1, 3], [2, 4]]);
        }
    );

    it('should return [["d", "a"], ["c", "b"]] after rotating [["a", "b"], ["c" ,"d"]] 90 degrees to the right',
        () => {
            const matrix = [["a", "b"], ["c", "d"]];
            expect(`${rotateMatrix(matrix)}`).toEqual(`${[["c", "a"], ["d", "b"]]}`);
        }
    );

    it('should return [["g", "d", "a"], ["h", "e", "b"], ["i", "f", "c"]] ' +
        'after rotating ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ' +
        '90 degrees to the right',
        () => {
            const matrix = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
            expect(`${rotateMatrix(matrix)}`)
                .toEqual(`${[["g", "d", "a"], ["h", "e", "b"], ["i", "f", "c"]]}`);
        }
    );
});
