// Note: you cannot use additional data structures
export const hasAllUniqueCharacters = (aString: string) => {
    for (let i = 0; i < aString.length; i++) {
        for (let j = i + 1; j < aString.length; j++) {
            if (aString[i] === aString[j]) return false
        }
    }
    return true;
};
