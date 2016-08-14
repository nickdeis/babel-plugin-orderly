const babel = require("babel-core");


const options = {};

babel.transformFile(`${__dirname}/test.js`,options,function(err,result){
    if(err){
        throw new Error(err);
    }
    console.log(result.code);
});