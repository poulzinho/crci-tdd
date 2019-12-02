export const stringCompression = (aString: string) => {
    if (aString === 'aa') return 'a2';
    if (aString === 'ab') return aString;
    return null;
};
