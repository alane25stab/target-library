var url= "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Miscellaneous/Target%20Store%20Locations.csv";
var address = getColumn(url, 1);
var city = getColumn(url, 2);
var county = getColumn(url, 3);
var latitude = getColumn(url, 4);
var longitude = getColumn(url, 5);
var postal = getColumn(url, 6);
var stateCode = getColumn(url, 7);
var state = getColumn(url, 8);

// it sorts through the cities based on the input and finds the adresses of targets in those cities, if there isnt one it returns a try again message.
function getAddressByCity(City){
  var citAdd = [];
  for (var i = 0; i < city.length; i++){
    if (city[i].toLowerCase() == City.toLowerCase()){
      citAdd.push(address[i]);
    }
  }
    if (citAdd.length == 0){
      return "Try Another City Location, or check spelling";
    }
return citAdd;
 }
//console.log(getAddressByCity("denver"))


// takes state and returns the cities that have targets at them in that state witha helpful error message like 'springfield' doesent have a target;
function getCityTargetState(State){
  var stateFinder = [];
  for (var i = 0; i < state.length; i++){
    if (state[i].toLowerCase() == State.toLowerCase()){
      stateFinder.push(city[i]);
    }
  }
    if (stateFinder.length == 0){
      return "Try Another State, that one isn't right somehow!";
    }
return stateFinder;
}
//console.log(getCityTargetState("Colordo"));



// finds all the counties that have a target in that state
function statesCountyTarget(State){
  var findCounty = [];
  for (var i = 0; i < state.length; i++){
    if (state[i].toLowerCase() == State.toLowerCase()){
      findCounty.push(county[i])
    }
  } 
  if (findCounty.length == 0){
  findCounty.push("A'int no county Here got a Target")  
  }
  return findCounty;
}
//console.log(statesCountyTarget("Albemarle"));

// tells the postal of targets in given city
function PostalsOfTargetsInCity(CITY){
  var CiTy = [];
  for (var i = 0; i < city.length; i++){
    if (city[i].toLowerCase() == CITY.toLowerCase()){
      CiTy.push(postal[i]);
    }
  }
  if (CiTy == 0){
    return "No Targets There!";
  }
  if (CiTy == 1){
   return "Only 1: "+ postal[i];
  }
  return CiTy;
}
//console.log(PostalsOfTargetsInCity("Charlottesville"));



// takes the address returns a postal code and county for each input
function addressOfTargets(Addresses){
    var addres = [];
    for (var i = 0; i < address.length; i++){
    if (address[i].toLowerCase() == Addresses.tolowerCase()){
      addres.push(postal[i] + ", " + county[i] + " County");
    }
}
      if (addres == 0){
      return "No Targets in that area."
      }
  return addres;
}
console.log(addressOfTargets("15,3660 Marketplace Blvd,East Point,Fulton,33.66,-84.5,30344.0,GA,Georgia"));
