//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 10;
var rgbColor = "#800000"; 
var reverse = false;
var interval;
var ball = document.getElementById('ball');

var velReverse = false;
var mvSpeed = 10;
ballInt()

//Function that changes the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 500;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 500;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }
  rgbColor = rgbArray[positionX / velocity];
  ball.style.backgroundColor = rgbColor;
  ball.style.width = (positionY / 2) + "px";
  ball.style.height = (positionY / 2) + "px";
  
 if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function intNum () {
  if (velReverse) {
    mvSpeed = mvSpeed - 10;
  } else {
    mvSpeed = mvSpeed + 10;
  }
  if (mvSpeed > 500 || mvSpeed === 0) {
    velReverse = !velReverse
  }
    return mvSpeed
  }

function ballInt() {
  moveBall();
  intNum();
  interval = setTimeout(ballInt, mvSpeed);
}
