export const urlify = (aString: string, finalLength?: number) => {
    return aString.split('')
        .reduce((acum, current) => {
            acum += current === ' ' ? '%20' : current;
            return acum;
        }, '');
};
