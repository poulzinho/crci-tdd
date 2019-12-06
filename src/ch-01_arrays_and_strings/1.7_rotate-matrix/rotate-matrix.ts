export const rotateMatrix = (matrix: unknown[][]): unknown[][] => {
    const tmp = matrix.reduce((acum, curr) => {
        curr.forEach(y => acum.push(y));
        return acum;
    }, []);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (i === 0 && j === 0) {
                matrix[i][j] = tmp[2]
            }

            if (i === 0 && j === 1) {
                matrix[i][j] = tmp[0]
            }

            if (i === 1 && j === 0) {
                matrix[i][j] = tmp[3]
            }

            if (i === 1 && j === 1) {
                matrix[i][j] = tmp[1]
            }
        }
    }

    return matrix;
};
