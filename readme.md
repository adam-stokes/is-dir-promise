# is-dir-promise [![Build Status](https://travis-ci.org/battlemidget/is-dir-promise.svg?branch=master)](https://travis-ci.org/battlemidget/is-dir-promise)

> Promise version of `is-dir`

## Install

```
$ npm install --save is-dir-promise
```

## Usage

```js
var isDirPromise = require('is-dir-promise');

isDirP("/tmp").then(function(ret){
    console.log("Found it!");
    return;
}).catch(function(e){
    throw Error(e);
});
```

## API

### isDirPromise(path)

#### path

*Required* 
Type: `string`

Path of directory.

## License

MIT © [Adam Stokes](http://astokes.org)
