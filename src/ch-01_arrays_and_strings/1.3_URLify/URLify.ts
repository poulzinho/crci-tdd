export const urlify = (aString: string, stringLength?: number) => {
    const cutString = stringLength ? aString.substr(0, stringLength) : aString;

    return cutString.split('')
        .reduce((acum, character) => {
            acum += character === ' ' ? '%20' : character;
            return acum;
        }, '');
};
