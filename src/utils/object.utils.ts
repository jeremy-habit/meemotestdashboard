export const isValueInObjectDeep = (obj: {}, val: string) => {
    for (const i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
            return isValueInObjectDeep(obj[i], val);
        } else if (obj[i] == val) {
            return true;
        }
    }
};
