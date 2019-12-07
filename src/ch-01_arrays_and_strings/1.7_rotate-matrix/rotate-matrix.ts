export const rotateMatrix = (matrix: unknown[][]): unknown[][] => {

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (!result[j]) {
                result[j] = [];
            }

            result[j].unshift(matrix[i][j]);
        }
    }

    return result;
};
