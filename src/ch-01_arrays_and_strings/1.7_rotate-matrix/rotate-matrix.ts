export const rotateMatrix = (
    matrix: unknown[][],
    direction: 'right' | 'left' = "right"
): unknown[][] => {

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (!result[j]) {
                result[j] = [];
            }

            direction === "right"
                ? result[j].unshift(matrix[i][j])
                : result[j].push(matrix[i][j])
        }
    }

    return result;
};
