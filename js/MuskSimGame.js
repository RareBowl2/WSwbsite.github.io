const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const cWidth = 360;
const cHeight = 360;
const sensitivity = 0.3;

const shipSprite = document.getElementById("ShipSprite");

canvas.width = cWidth;
canvas.height = cHeight;

var rotation = 0;
var hVelocity = 0;

const player = new Ship();
var right = false;
var left = false;

function animate(){
    //Clear Frame and Repeat Function
    window.requestAnimationFrame(animate);
    c.clearRect(0,0,cWidth,cHeight);

    //Background Effects
    c.fillStyle = 'lightblue';
    c.fillRect(0,0,360,360);

    c.beginPath();
    c.arc(180,180,180,0,2 *Math.PI);
    c.stroke();

    player.draw();

    if(right){
        rotation += sensitivity;
    }else if(left){
        rotation -= sensitivity;
    }

    hVelocity += rotation;

}

animate();



