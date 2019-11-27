export const urlify = (aString: string) => {
    return aString.split('')
        .reduce((acum, current) => {
            acum += current === ' ' ? '%20' : current;
            return acum;
        }, '');
};
