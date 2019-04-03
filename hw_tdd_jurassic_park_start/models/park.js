const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDino = function(dino){
  this.dinosaurs.push(dino)
};

Park.prototype.removeDino = function(dino){
  let index = this.dinosaurs.indexOf(dino)
  if (index > -1) {
    this.dinosaurs.splice(index, 1);
  }
};

// returns a function??
Park.prototype.mostValuableDino = function(){
  let sortable = [];
  let dinosaurs = this.dinosaurs;
  for (dino of dinosaurs){
    let guests = dino.guestsAttractedPerDay;
    sortable.push(guests);
  };
  sortable.sort();

  let number = sortable.pop();

  for (dino of dinosaurs){
    if (dino.guestsAttractedPerDay === number){
      return dino
    };
  };
};

// returns an empty array??
Park.prototype.findBySpecies = function(species){
  let selected = []
  for (dino in this.dinosaurs){
    if (dino.species === species){
      selected.push(dino)
    };
  }
  return selected
};

// Park.prototype.removeBySpecies = function(species){
//   for (dino of dinosaursToRemove){
//     removeDino(dino);
//   }
// };

//Returning a function
Park.prototype.totalVisitorsPerDay = function(){
  let totalVisitors = 0
  for (dino in this.dinosaurs){
    totalVisitors += dino.guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.totalVisitorsPerYear = function(){
  let visitorsPerDay = totalVisitorsPerDay();
  let visitorsPerYear = visitorsPerDay * 365;
  return visitorsPerYear;
}



module.exports = Park;
