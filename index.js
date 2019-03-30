const os = Object.prototype.toString;
const tstr = v => typeof(v);
const ostr = v => os.call(v);

const isNull = v => v === null;
const isUndefined = v => tstr(v) === 'undefined';
const isString = v => tstr(v) === 'string';
const isNumber = v => tstr(v) === 'number';
const isFunction = v => tstr(v) === 'function';
const isBoolean = v => tstr(v) === 'boolean';
const isObject = v => ostr(v) === '[object Object]';
const isArray = v => ostr(v) === '[object Array]';
const isRegExp = v => ostr(v) === '[object RegExp]';
const isDate = v => ostr(v) === '[object Date]'

const isValidNumber = v => isNumber(v) && !isNaN(v);
const isInt = v => (v >> 0) === v;
const isUint = v => isInt(v) && v >= 0;

module.exports = {
    isNull,
    isUndefined,

    isString,
    isNumber,
    isFunction,
    isBoolean,

    isObject,
    isArray,
    isRegExp,
    isDate,

    isValidNumber,
    isInt,
    isUint,
};
