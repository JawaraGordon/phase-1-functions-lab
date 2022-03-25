// Code your solution in this file!
const hqLocation = 42
const travel = distance

function distanceFromHqInBlocks(distance) {
    if (distance  >= hqLocation) {
        return distance - hqLocation;
    } 
    else (distance > hqLocation) 
        return hqLocation - distance;
    
        
}
distanceFromHqInBlocks(43);

// Math.abs()


function distanceFromHqInFeet(travel) {
    // const inFeet = distanceFromHqInBlocks (travel);
    const blocks = distanceFromHqInBlocks (travel);
    return blocks * 264;
    
}

function distanceTravelledInFeet(start, end) { 
    return Math.abs(start - end) * 264;
    
}




function calculatesFarePrice(start, end) {
    let travel = distanceTravelledInFeet(start, end)
    if (travel < 400 ){
         return 0;

    } if (travel > 400 && travel < 2000) {
        // return travel * 0.02 - 8;
        return 2.56
               
    } if (travel > 2000 && travel < 2500) {
        return 25;
               
    } else (travel > 2500);
        return 'cannot travel that far';
              

    }




/* function distanceTravelledInFeet(inFeet, hqLocation) {
    
    const howFar = inFeet - hqLocation
    return howFar * 264
}

distanceTravelledInFeet(50) */


// distanceFromHqInFeet(blocks)

/* 
function distanceFromHqInBlocks(blocks) {
    return hqLocation - blocks;
}
distanceFromHqInBlocks(50); */




/* function distanceFromHqInBlocks(feet){
    return distanceFromHqInBlocks - 42
}

distanceFromHqInBlocks(50) */