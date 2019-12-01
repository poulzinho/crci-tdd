export const oneAway = (aString: string, bString: string): boolean => {

    const aArray = aString.split('');
    const bArray = bString.split('');

    let countAway = 0;

    if (aArray.length >= bArray.length) {
        aArray.forEach((bChar) => {
            if (!bArray.includes(bChar)) countAway++;
        });
    } else {
        bArray.forEach((bChar) => {
            if (!aArray.includes(bChar)) countAway++;
        });
    }

    return countAway === 1;
};
