class App 
{
    runApplication()
    {
        
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

            g.fillStyle = "red";
            g.fillRect(50, 50, 300, 300);


            g.fillStyle = "black";
            g.beginPath();
            g.moveTo(50, 50);
            g.lineTo(200, 10);
            g.lineTo(350, 50);
            g.closePath();
            g.fill();

            g.fillStyle = "white"; //deur
            g.fillRect(150, 200, 100, 150);


            g.fillStyle = "white"; //raam


        let random = Math.random();
        console.log(random);
        if(random < 0.5){ 
            g.fillStyle = "yellow";    
        }
        g.fillRect(80, 80, 60, 60);
    }
}
let app = new App();
app.runApplication();