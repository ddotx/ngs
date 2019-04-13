// function (exports,module,require,__filename,__dirname){

console.log(arguments);

exports.a = 42; //==>exports is alias of module.exports 
module.exports.b = 37;

// ==> exports as {object} as default

//module.exports = () => {} ==>exports as function

// return module.exports
//}