export const oneAway = (aString: string, bString: string): boolean => {

    const aArray = aString.split('');
    const bArray = bString.split('');
    const lengthAMinusB = aArray.length - bArray.length;

    let countOneAway = 0;

    if (lengthAMinusB === 1) {
        for (let i = 0, j = 0; i < aArray.length; i++) {
            if (aArray[i] !== bArray[j]) {
                countOneAway++;
                j--;
            }
            j++;
        }
    } else if (lengthAMinusB === -1) {
        for (let i = 0, j = 0; i < bArray.length; i++) {
            if (bArray[i] !== aArray[j]) {
                countOneAway++;
                j--;
            }
            j++;
        }
    } else if (lengthAMinusB === 0) {
        for (let i = 0; i < aArray.length; i++) {
            if (bArray[i] !== aArray[i]) {
                countOneAway++;
            }
        }
    }

    return countOneAway === 1;
};
