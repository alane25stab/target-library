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
    if (city[i] == City){
      citAdd.push(address[i]);
    }
  }
    for (var i = 0; i < citAdd.length; i++){
    if (citAdd.length == 0){
      return "Try Another US City Location";
    }
  }
return citAdd;
}
//console.log(getAddressByCity("Boulder"))


// takes state and returns the cities that have targets at them in that state witha helpful error message like 'springfield' doesent have a target;
function getCityTargetState(State){
  var stateFinder = [];
  for (var i = 0; i < state.length; i++){
    if (state[i] == State){
      stateFinder.push(city[i]);
    }
  }
    if (stateFinder.length == 0){
      return "Try Another State, that one isn't right somehow!";
    }
return stateFinder;
}
//console.log(getCityTargetState("New York"));



// finds all the counties that have a target in that state
function statesCountyTarget(State){
  var findCounty = [];
  for (var i = 0; i < state.length; i++){
    if (state[i] == State){
      findCounty.push(county[i])
    }
  } 
  if (findCounty.length == 0){
  findCounty.push("A'int no county Here got a Target")  
  }
  return findCounty;
}
console.log(statesCountyTarget("Azironax"));

// tells the postal of targets in given city
function PostalsOfTargetsInCity(CITY){
  var CiTy = [];
  for (var i = 0; i < city.length; i++){
    if (city[i] == CITY){
      CiTy.push(postal[i]);
    }
  }
  if (CiTy == 0){
    return "No Targets There!";
  }
  if (CiTy == 1){
   return "Only 1:"+ postal[i];
  }
  return CiTy;
}
//console.log(PostalsOfTargetsInCity("Salem"));



// takes the address returns a postal code and county for each input
function addressOfTargets(Addresses){
    var addres = [];
    for (var i = 0; i < address.length; i++){
    if (address[i] == Addresses){
      addres.push(postal[i] + ", " + county[i] + " County");
    }
}
      if (addres == 0){
      return "No Targets in that area."
      }
  return addres;
}
//console.log(addressOfTargets("4225 Crestview Dr"));
