/* global describe it */

"use strict";
var isDirP = require("./");
require("should");

describe("node module", function() {
  it("should send back true for directory", function(done) {
    isDirP(__dirname).then(function(bool) {
      bool.should.be.true;
      done();
    });
  });
  it("should catch errors", function(done) {
    isDirP("/aadfffdsafda").catch(function(err) {
      err.should.be.an.instanceOf(Error);
      done();
    });
  });
});
