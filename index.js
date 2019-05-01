function findMatching(array, name){
  return array.filter(drivers => drivers.toUpperCase() == name.toUpperCase());
}

function fuzzyMatch(array, string){
  const len = string.length;
  return array.filter(driver => driver.slice(0,len) == string)
}

function matchName(drivers, string){
  return drivers.filter(d => d.name == string)
}
