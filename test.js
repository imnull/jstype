const jstype = require('./index');

console.log('jstype.isArray', jstype.isArray([]));
console.log('jstype.isObject', jstype.isObject([]));
console.log('jstype.isObject', jstype.isObject({}));
console.log('jstype.isObject', jstype.isObject(new Date));
console.log('jstype.isDate', jstype.isDate(new Date));

console.log('jstype.name', jstype.name(new Date));
console.log('jstype.name', jstype.name({}));
console.log('jstype.name', jstype.name([]));
console.log('jstype.name', jstype.name(/./));
console.log('jstype.name', jstype.name(null));
console.log('jstype.name', jstype.name(undefined));
console.log('jstype.name', jstype.name(0));
console.log('jstype.name', jstype.name(''));
console.log('jstype.name', jstype.name(false));
console.log('jstype.name', jstype.name(()=>{}));