var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){
  var dinosaur;

  beforeEach(function (){
    this.dinosaur1 = new Dinosaur("T-Rex", 10);
  })

  it("A dinosaur should have a type, and number of offspring per year.", function (){
    assert.strictEqual("T-Rex", this.dinosaur1.type);
    assert.strictEqual(10, this.dinosaur1.numOfOffspring);
  })

})