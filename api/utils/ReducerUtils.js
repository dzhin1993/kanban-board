export const groupBy = (arr, key) => arr.reduce(function (res, obj) {
    (res[obj[key]] = res[obj[key]] || []).push(obj);
    return res;
}, {});