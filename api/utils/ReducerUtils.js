module.exports = groupBy = function (arr, key) {
    return arr.reduce(function (res, obj) {
        (res[obj[key]] = res[obj[key]] || []).push(obj);
        return res;
    }, {});
};