// Rover Object Goes Here
// ======================
var rover = {
  direction : "N",
  x : 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

function moveBackward(rover){
  console.log("moveBackward was called")
}

function turnTheRover(rover, turningAction) {
  var roverCurrentDirection = rover.direction;
  if(roverCurrentDirection=="N" && turningAction==turnLeft){
    turnLeft();
    rover.direction="W";
  }
  if(roverCurrentDirection=="N" && turningAction==turnRight) {
    turnRight();
    rover.direction="E";
  }
  if(roverCurrentDirection=="W" && turningAction==turnRight) {
    turnRight();
    rover.direction="N";
  }
  if(roverCurrentDirection=="W" && turningAction==turnLeft) {
    turnLeft();
    rover.direction="S";
  }
  if(roverCurrentDirection=="E" && turningAction==turnLeft) {
    turnLeft();
    rover.direction="N";
  }
  if(roverCurrentDirection=="E" && turningAction==turnRight) {
    turnRight();
    rover.direction="S";
  }
  if(roverCurrentDirection=="S" && turningAction==turnLeft) {
    turnLeft();
    rover.direction="E";
  }
  if(roverCurrentDirection=="S" && turningAction==turnRight) {
    turnRight();
    rover.direction="W";
  }
  return rover.direction;
}

function moveForwardTheRover (rover, movefunction) {
  var currentdirection = rover.direction;
  if(currentdirection=="N" && rover.y>0) {
    rover.y -=1; 
  } else if (currentdirection=="S" && rover.y<9) {
    rover.y +=1; 
  } else if (currentdirection=="W" && rover.x >0) {
    rover.x -=1; 
  } else if (currentdirection=="E" && rover.x <9) {
    rover.x +=1;
  } else if((rover.y=0 && currentdirection=="N") || (rover.y = 9 && currentdirection=="S") || (rover.x = 0 && currentdirection=="W") || (rover.x = 9 && currentdirection=="E")) {
    console.log("Can't go further");
  }  
  movefunction();
  return  [rover.x,  rover.y];
}

function moveBackwordTheRover (rover, movefunction) {
  var currentdirection = rover.direction;
  if(currentdirection=="N" && rover.y<9) {
    rover.y +=1; 
  } else if (currentdirection=="S" && rover.y>0) {
    rover.y -=1; 
  } else if (currentdirection=="W" && rover.x <9) {
    rover.x +=1; 
  } else if (currentdirection=="E" && rover.x >0) {
    rover.x -=1;
  } else if((rover.y=0 && currentdirection=="N") || (rover.y = 9 && currentdirection=="S") || (rover.x = 0 && currentdirection=="W") || (rover.x = 9 && currentdirection=="E")) {
    console.log("Can't go further");
  }  
  movefunction();
  return  [rover.x,  rover.y];
}

function testDirection(rover,turnfunction) {
  console.log("Current direction " + rover.direction);
  var result = turnTheRover(rover, turnfunction);
  rover.direction = result;
  console.log("So the new direction is " + rover.direction);
}

function testMove(rover,moveAction) {
  console.log("Current position " + rover.x +" "+ rover.y)
  var resultxy = moveForwardTheRover(rover, moveAction);
  rover.x=resultxy[0];
  rover.y=resultxy[1];
  rover.travelLog.push([rover.x,rover.y]);
  console.log("NEW Position x:"+ resultxy[0] + " y:"+resultxy[1] ); 
};

/*
testDirection(rover,turnLeft);
testDirection(rover,turnLeft);
testMove(rover,moveForward);
testDirection(rover,turnLeft);
testMove(rover,moveForward);
testDirection(rover,turnRight);
testMove(rover,moveForward);
*/
var testTurnMove = "rffrfflfrff";


for (i = 0 ; i < testTurnMove.length ; i++) {
  var action=testTurnMove[i];
  console.log(action);
  if(action == "r") {
    testDirection(rover,turnRight);
  } else if (action == "l") {
    testDirection(rover,turnLeft);
  } else if (action == "f") {
    testMove(rover,moveForward);
  } else {
    console.log("Action is not specified");
  }
};

console.log(rover.travelLog);
