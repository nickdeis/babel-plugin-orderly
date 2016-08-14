# babel-plugin-orderly

Transform tagged template strings with [orderly](https://github.com/zaach/orderly.js) syntax into JSON schema.

<!--
### Install

    npm install -D babel-plugin-orderly
-->

### Usage

```json
{"plugins":["orderly"]}
```

### In

```js
var schema = orderly`
object {
  integer {0,200} age;
  object {
    string first;
    string last;
  }* name;
}*;
`
```


### Out

```js
var schema = {
    "type": "object",
    "properties": {
        "age": {
            "type": "integer",
            "minimum": 0,
            "maximum": 200
        },
        "name": {
            "type": "object",
            "properties": {
                "first": {
                    "type": "string"
                },
                "last": {
                    "type": "string"
                }
            }
        }
    }
};
```
## Why

I did this mostly to get my feet wet with the babel plugin API.  
orderly is only 25kb, so more than likely you can just add it to your project and no one will notice.  
I plan to make other plugins for languages that use JISON, but a stateless language that transpiles to JSON seemed easier than other JISON based languages.

## Thanks

* [zaach](https://github.com/zaach) , for his fantastic [JISON](https://github.com/zaach/jison) parser generator and [orderly](https://github.com/zaach/orderly.js) itself


