const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let playerImageSprite = 'img/player1.png'
const playerImage = new Image();
let playerX = 300;
let playerY = 300;


function changeSprite(sprite){
  playerImageSprite = sprite;
  playerImage.src = playerImageSprite;
};

changeSprite('img/player2.png');

document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'd'){
    playerX++
    console.log(playerX)
  }else if(event.key === 'a'){
    playerX--
    console.log(playerX)
  }else if(event.key === 'w'){
    playerY--
    console.log(playerY)
  }else if(event.key === 's'){
    playerY++
    console.log(playerY)
  }
})

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, playerX, playerY, 40, 40);

  requestAnimationFrame(animate);
};
animate();



console.log(playerImage)




