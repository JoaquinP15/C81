canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "purple";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(200 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;

    circle(mousex , mousey);
}

function circle(mousex , mousey)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = 5;
    ctx.arc(mousex , mousey , 40 , 0 , 2*Math.PI);
    ctx.stroke(); 
}