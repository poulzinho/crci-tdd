export const isPalindromePerm = (aString: string) => {
    const arrString = aString.replace(/\s/g,'').split('');

    const chartOcurrences = arrString.reduce((acum, curr) => {
        acum[curr] = acum[curr] + 1 || 1;
        return acum;
    }, {});

    let mulligan = 0;

    for (let key in chartOcurrences) {
        if (chartOcurrences[key] % 2 !== 0) {
            mulligan++;
        }

        if (mulligan > 1) {
            return false;
        }
    }

    return true;
};
