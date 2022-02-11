canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_heigth=100;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_img="rover.png";
function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_img;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}
function uploadbackground()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_heigth);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press=="38")
    {
        up();
        console.log("up")
            }
    if(key_press=="40")
    {
        down();
        console.log("down");
    }
    if(key_press=="37")
    {
        left();
        console.log("left");
    }
    if(key_press=="39")
    {
        right();
        console.log("right");
    }
}
