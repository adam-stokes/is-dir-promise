"use strict";

var Promise = require("native-or-bluebird");
var isDir = require("is-dir");

module.exports = function (path) {
    return new Promise(function(_resolve, _reject){
        isDir(path, function(err, stats){
            return err === null ? _resolve(stats) : _reject(err);
        });
    });
};
