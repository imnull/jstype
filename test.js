const jstype = require('./index');

console.log('jstype.isArray', jstype.isArray([]));
console.log('jstype.isObject', jstype.isObject([]));
console.log('jstype.isObject', jstype.isObject({}));
console.log('jstype.isObject', jstype.isObject(new Date));
console.log('jstype.isDate', jstype.isDate(new Date));