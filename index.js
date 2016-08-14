const orderly = require("orderly");




function compile(quasi) {
    var source = "";
    for(var i=0;i <quasi.quasis.length;i++){
        source+= quasi.quasis[0].value.raw
    }
    var jsonSchema = orderly.parse(source);
    return `(${JSON.stringify(jsonSchema)})`;
}

module.exports = function babelOrderly(babel) {
    const t = babel.types;
    const visitor = {
        TaggedTemplateExpression(path, state) {
            const {node} = path;
            if(t.isIdentifier(node.tag, {name: 'orderly'})){
               var program = compile(node.quasi);
               path.replaceWithSourceString(program);
            }
        }
    };
    return { visitor };
};