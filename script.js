console.log('js sourced');

var garage=[];

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
  }
    console.log(newCar);
  //push car into garage
  garage.push(newCar);
  //display cars
  displayCars();
};//end addCar

var displayCars = function() {
  console.log("in displayCars");
  console.log(garage);
  //empty our ul element
  document.getElementById('allCars').innerHTML='';
  //for each car add a listing, year, make, and model
  for (var i = 0; i < garage.length; i++) {
    var carInfo = garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model + ' ' + garage[i].picURL + ' ' + garage[i].description;
    console.log(carInfo);
    //put carInfo inside a list item through a textNode
    var listItem = document.createElement('li'); //create li
    var textNode = document.createTextNode(carInfo);//create textNode
    //append textNode as child to li
    listItem.appendChild( textNode );
    //append listItem to ul
    document.getElementById('allCars').appendChild( listItem );
  }
};//end displayCars
