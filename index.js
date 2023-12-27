// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) 
{
    return Math.abs(pickupLocation-42)
}

function distanceFromHqInFeet(pickupLocation){
   const blocksDistance =distanceFromHqInBlocks (pickupLocation);
    return blocksDistance*264;
}
function distanceTravelledInFeet(start,destination){
    const blocksTraveled =Math.abs(destination-start)
    return blocksTraveled*264
}
function calculatesFarePrice(startBlock,destinationBlock){
    const distance = distanceTravelledInFeet (startBlock,destinationBlock);
    if (distance <= 400) {return  0;
    } else if (distance <2000)
      {return (distance - 400)*0.02;
    } else  if (distance <=2500){return 25;
    }else {
return'cannot travel that far';}
    } 

