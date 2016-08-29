console.log('js sourced');

var garage=[];
var archive=[];

var addCar = function(){
  console.log('in addCar');
  //get user input
  //create car object
  var newCar = {
    year : document.getElementById('yearIn').value,
    make : document.getElementById('makeIn').value,
    model : document.getElementById('modelIn').value,
    picURL : document.getElementById('picURLIn').value,
    description : document.getElementById('descriptionIn').value,
  };
    console.log(newCar);
    if(newCar.year == "" || newCar.make == "" || newCar.model == ""){
      alert('Required fields are empty.');

    }else{
      //clear inputs
    clearInputs();
    //push car into garage
    garage.push(newCar);
    //display cars
    displayCars();
    }
};//end addCar

var clearInputs = function(){
  console.log('in clearInputs');
  document.getElementById('yearIn').value = "";
  document.getElementById('makeIn').value = "";
  document.getElementById('modelIn').value = "";
  document.getElementById('picURLIn').value = "";
  document.getElementById('descriptionIn').value = "";
};

var displayCars = function() {
  console.log("in displayCars");
  console.log(garage);
  //empty our div element
  document.getElementById('allCars').innerHTML='';
  //for each car add a listing, year, make, and model
  for (var i = 0; i < garage.length; i++) {
    var carInfo = '<h2>' + garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model + '</h2>'
    + ' ' + '<img src="' + garage[i].picURL +'">' + garage[i].picURL + ' ' + garage[i].description + "<button onClick='takeOut(" + i + ")'>Remove</button>";
    //append carInfo to output div


    document.getElementById('allCars').innerHTML += carInfo;
  }
};//end displayCars

var takeOut = function(index){
  console.log("in takeOut");
  console.log("Taking out the " + garage[index].year +  " " + garage[index].model + ".");
  //save archived car
var archivedCar = garage[index]
//remove archived car
garage.splice(index, 1);

console.log(archivedCar);
//add archived car to new array of archived cars
archive.push(archivedCar);
console.log(archive);

displayCars();
displayArchivedCars();

};

var displayArchivedCars = function(){
  document.getElementById('archive').innerHTML='';
  //for each car add a listing, year, make, and model
  for (var i = 0; i < archive.length; i++) {
    var archiveInfo = '<p>' + archive[i].year + ' ' + archive[i].make + ' ' + archive[i].model +
    + ' ' + "<button onClick='addCarAgain(" + i + ")'>Add</button>";
    //append carInfo to output div


    document.getElementById('archive').innerHTML += archiveInfo;
}
};
//add back to garage from archive
var addCarAgain = function(index){
  //save spliced car from archive
  var readdCar = archive[index];
  archive.splice(index, 1);

  console.log(readdCar);
  //add car back to garage car
  garage.push(readdCar);
  console.log(garage);

displayCars();
displayArchivedCars();

}
