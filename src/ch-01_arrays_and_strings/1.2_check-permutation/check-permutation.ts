const sortString = (aString: string) => aString.split('').sort().join('');

export const checkPermutation = (stringOne: string, stringTwo: string) => {
    if (stringOne.length !== stringTwo.length) {
        return false;

    } else {
        const sortedStringOne = sortString(stringOne);
        const sortedStringTwo = sortString(stringTwo);

        return sortedStringOne === sortedStringTwo;
    }
};
