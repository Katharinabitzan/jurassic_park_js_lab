const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park1;
  let park2;
  let park3;
  let park4;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('trycerotops', 'herbivore', 32);
    dinosaur3 = new Dinosaur('giant sloth', 'herbivore', 120);
    dinosaur4 = new Dinosaur('sabre tooth', 'carnivore', 303);
    dinosaur5 = new Dinosaur('sabre tooth', 'carnivore', 210);
    dinosaur6 = new Dinosaur('sabre tooth', 'carnivore', 303);

    park1 = new Park("Empty park", 2, []);
    park2 = new Park("Herbivore park", 20, [dinosaur2]);
    park3 = new Park("Mammal park", 60, [dinosaur3, dinosaur4]);
    park4 = new Park("Mammal park", 60, [dinosaur3, dinosaur4, dinosaur5, dinosaur6]);

  })

  it('should have a name', function(){
    const actual = park1.name;
    assert.strictEqual(actual, "Empty park")
  });

  it('should have a ticket price', function(){
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 2)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park2.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park2.addDino(dinosaur1)
    const actual = park2.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park3.removeDino(dinosaur4)
    const actual = park3.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park1.mostValuableDino;
    console.log(actual);
    // assert.strictEqual(actual, "T");
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    const actual = park4.findBySpecies('sabre tooth');
    assert.deepStrictEqual(actual, [1, 2, 3]);
  });

  xit('should be able to remove all dinosaurs of a particular species', function(){
    park4.removeBySpecies('sabre tooth');
    const actual = park4.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur3]);
  });

  xit('should calculate the total number of visitors per day', function(){
    const actual = park2.totalVisitorsPerDay;
    assert.strictEqual(actual, 40);
  });

  xit('should calculate the total number of visitors per year', function(){
    const actual = park2.totalVisitorsPerYear;
    assert.strictEqual(actual, 40);
  });

});

//
