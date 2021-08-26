export const flattenObject = (obj) => {
    const flattenedObj = {};

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(flattenedObj, flattenObject(obj[key]));
        } else {
            flattenedObj[key] = obj[key];
        }
    })

    return flattenedObj;
}