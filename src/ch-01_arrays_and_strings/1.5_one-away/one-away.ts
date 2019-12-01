export const oneAway = (aString: string, bString: string): boolean => {

    const aArray = aString.split('');
    const bArray = bString.split('');

    let countAway = 0;

    aArray.forEach((bChar) => {
        if (!bArray.includes(bChar)) {
            countAway++;
        }
    });

    return countAway === 1;
};
