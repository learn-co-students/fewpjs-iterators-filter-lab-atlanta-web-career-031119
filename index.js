function findMatching(arr, name){
    let drivers = arr.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
    return drivers
}


function fuzzyMatch(arr, name) {
    let drivers = arr.filter(driver => driver.charAt(0).includes(name.charAt(0)))
    return drivers
}

function matchName(arr, name){
    let drivers = arr.filter(driver => driver.name == name)
    return drivers
}