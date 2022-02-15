canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(200,200,90,0,2 * Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(400,200,90,0,2 * Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(600,200,90,0,2 * Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(300,300,90,0,2 * Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(500,300,90,0,2 * Math.PI);
ctx.stroke();