canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
widthOfLine = 5;

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40,2, 2 * Math.PI);
ctx.stroke();