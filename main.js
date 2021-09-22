canvas.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car_height=100;
var car_width=100;
var car_x=100;
var car_y=25;
function add(){
    car=new Image();
    car.onload=carupload;
    car.src="car2.png";
    function carupload(){
        ctx.drawImage(car,car_x,car_y,car_width,car_height);
}
        background=new Image();
    backgroud.onload=backgroundupload;
    background.src="g.jpg";
    function backgroundupload(){
        ctx.drawImage( background);
    }
}
    window.addEventListener("keydown",key_down);




