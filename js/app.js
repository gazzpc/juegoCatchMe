let target = document.getElementById("target");
let scoreDisplay = document.getElementById("score");
let speedDisplay = document.getElementById("speed");
let score = 0;
let speed = 0;

target.addEventListener("touchstart", function() {
  // touchstart: dispositivos moviles y click: computadora
  score++;
  speed++;
  scoreDisplay.innerHTML = score;
  speedDisplay.innerHTML = speed
  moveTarget();
});

const containerWidth = document.getElementById("game-container").offsetWidth;
const containerHeight = document.getElementById("game-container").offsetHeight;
const targetSize = target.offsetWidth;
const maxX = containerWidth - targetSize;
const maxY = containerHeight - targetSize; 

function moveTarget() {
  
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);
  target.style.left = randomX + "px";
  target.style.top = randomY + "px";

  setTimeout(moveTarget, 2000 / speed);
  console.log("random x: ", randomX);
  console.log("random y: ", randomy);
}

// function increaseSpeed() {
//   if (score % 5 === 0) {
//     speed++;
//   }
// }
  
