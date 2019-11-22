// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

context.beginPath()
context.linewidth = "10px";
context.fillStyle = "yellow";
context.moveTo(20,20);
context.lineTo(680,600);
context.lineTo(680,20);
context.closePath();
context.stroke();

// Het huis zelf
context.beginPath()
context.linewidth = "20px";
context.fillStyle = "brown";
context.moveTo(500, 300);
context.lineTo(500, 600);
context.lineTo(800, 600);
context.lineTo(800, 300);
context.fill();
context.stroke();

// het gras onder het huis
context.beginPath()
context.linewidth = "0px";
context.fillStyle = "green";
context.moveTo(0, 750);
context.lineTo(0, 600)
context.lineTo(1550, 600);
context.lineTo(1550, 750);
context.fill();
context.stroke();


context.beginPath()
context.linewidth = "0px";
context.fillStyle = "green";
context.moveTo(800, 600);
context.lineTo(900, 560)
context.lineTo(1550, 560);
context.lineTo(1550, 600);
context.fill();
context.stroke();

// hier kun je op de canvas tekenen



//3D huis muur

context.beginPath()
context.linewidth = "20px";
context.fillStyle = "brown";
context.moveTo(800, 600);
context.lineTo(900, 560)
context.lineTo(900, 300);
context.lineTo(800, 300);
context.fill();
context.stroke();

// de deur
context.beginPath()
context.linewidth = "20px";
context.fillStyle = "white";
context.moveTo(600, 600);
context.lineTo(550, 600);
context.lineTo(550, 500);
context.lineTo(600, 500);
context.fill();
context.stroke();


// regelt de disco ROOF!!! ( DISABLED )

roof();
function roof() {
    setTimeout(function(){
        var colors = ["green", "yellow", "blue"];
        var random = Math.floor(Math.random() * 3);     // returns a random integer from 0 to 9


        context.beginPath()
        context.linewidth = "20px";
        context.fillStyle = colors[random];
        context.moveTo(650, 150);
        context.lineTo(500, 300);
        context.lineTo(800, 300);
        context.fill();
        context.stroke();


        context.beginPath()
        context.linewidth = "20px";
        context.fillStyle = colors[random];
        context.moveTo(650, 150);
        context.lineTo(750, 150);
        context.lineTo(900, 300);
        context.lineTo(800, 300);
        context.fill();
        context.stroke();
        
    }, 100);
}


// boom1
context.beginPath()
context.linewidth = "20px";
context.fillStyle = "brown";
context.moveTo(330, 600);
context.lineTo(300, 450);
context.lineTo(340, 450);
context.lineTo(380,600);
context.fill();
context.stroke();


context.beginPath();
context.moveTo(280,380);
context.fillStyle = "green";
context.arc(320, 420, 50, 0, Math.PI * 2, false);
context.closePath();
context.strokeStyle = "#000";
context.stroke();
context.fill();

// boom 2
context.beginPath()
context.linewidth = "20px";
context.fillStyle = "brown";
context.moveTo(130, 600);
context.lineTo(100, 450);
context.lineTo(140, 450);
context.lineTo(180,600);
context.fill();
context.stroke();


context.beginPath();
context.moveTo(80,380);
context.fillStyle = "green";
context.arc(120, 420, 50, 0, Math.PI * 2, false);
context.closePath();
context.strokeStyle = "#000";
context.stroke();
context.fill();

// boom 3
context.beginPath()
context.linewidth = "20px";
context.fillStyle = "brown";
context.moveTo(930, 600);
context.lineTo(900, 450);
context.lineTo(940, 450);
context.lineTo(980,600);
context.fill();
context.stroke();


context.beginPath();
context.moveTo(880,380);
context.fillStyle = "green";
context.arc(920, 420, 50, 0, Math.PI * 2, false);
context.closePath();
context.strokeStyle = "#000";
context.stroke();
context.fill();



// boom 4
context.beginPath()
context.linewidth = "20px";
context.fillStyle = "brown";
context.moveTo(1230, 600);
context.lineTo(1200, 450);
context.lineTo(1240, 450);
context.lineTo(1280,600);
context.fill();
context.stroke();


context.beginPath();
context.moveTo(1180,380);
context.fillStyle = "green";
context.arc(1220, 420, 50, 0, Math.PI * 2, false);
context.closePath();
context.strokeStyle = "#000";
context.stroke();
context.fill();

DiscorTrees();
function DiscorTrees() {
    setTimeout(function(){
        var greenColors = ["#22ff00", "#20ed00", "#1dd900", "#1ac200", "#159e00", "#117801"];
        //1

        context.beginPath();
        context.moveTo(280,380);
        context.fillStyle = greenColors[Math.floor(Math.random() * 6)];
        context.arc(320, 420, 50, 0, Math.PI * 2, false);
        context.closePath();
        context.strokeStyle = "#000";
        context.stroke();
        context.fill();
        
        //2
        context.beginPath();
        context.moveTo(80,380);
        context.fillStyle = greenColors[Math.floor(Math.random() * 6)];
        context.arc(120, 420, 50, 0, Math.PI * 2, false);
        context.closePath();
        context.strokeStyle = "#000";
        context.stroke();
        context.fill();
        
        //3
        context.beginPath();
        context.moveTo(880,380);
        context.fillStyle = greenColors[Math.floor(Math.random() * 6)];
        context.arc(920, 420, 50, 0, Math.PI * 2, false);
        context.closePath();
        context.strokeStyle = "#000";
        context.stroke();
        context.fill();

        //4
        context.beginPath();
        context.moveTo(1180,380);
        context.fillStyle = greenColors[Math.floor(Math.random() * 6)];
        context.arc(1220, 420, 50, 0, Math.PI * 2, false);
        context.closePath();
        context.strokeStyle = "#000";
        context.stroke();
        context.fill();

        DiscorTrees();
    }, 100);
}
