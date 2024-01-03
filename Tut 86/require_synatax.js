const obj = require("./commonJS_.js");


//  make sure that package.json doesmot have  { "type": "module"}
console.log(obj);
console.log("______________________________");
console.log(__dirname);
console.log("______________________________");
console.log(__filename);


// (function(exports, require, module, __filename, __dirname){
    // 
    //  Module code lives here
    // 
// });

//  this is commonjs