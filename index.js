
function distanceFromHqInBlocks(streetLocation) {
    if (streetLocation < 42) {
        return (streetLocation - 42)*-1;
    } else return streetLocation - 42;
}

function distanceFromHqInFeet(streetLocation) {
    let numberOfBlocks = distanceFromHqInBlocks(streetLocation);
    return numberOfBlocks * 264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);



function distanceTravelledInFeet(startLocation, endLocation) {
    if (startLocation < endLocation) return (endLocation - startLocation) * 264;
    else return (startLocation - endLocation) * 264;
}

function calculatesFarePrice(startLocation, endLocation) {
    let distance = distanceTravelledInFeet(startLocation, endLocation);
    if (distance < 400) return 0;
    if (distance > 400 && distance <= 2000) return (distance - 400) * .02;
    if (distance > 2000 && distance <= 2500) return 25;
    if (distance > 2500) return "cannot travel that far";
}



