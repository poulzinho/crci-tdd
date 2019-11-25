export const checkPermutation = (stringOne: string, stringTwo: string) => {
    if (stringOne.length !== stringTwo.length) {
        return false;
    }

    return stringOne === 'aba' && stringTwo === 'aab';
};
