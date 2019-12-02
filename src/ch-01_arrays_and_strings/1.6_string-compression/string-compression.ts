export const stringCompression = (aString: string) => {
    const repetitions: string[][] = aString
        .split('')
        .reduce((outer, char, idx, arr) => {
            const inner: string[] = outer[outer.length - 1] || [];

            if (inner[0] === char) {
                inner.push(char);
                outer[outer.length - 1] = inner;
            } else {
                outer.push([arr[idx]]);
            }

            return outer;
        }, []);

    return repetitions.reduce((result, inner) => {
        result += `${inner[0]}${inner.length}`;
        return result;
    }, '');
};
