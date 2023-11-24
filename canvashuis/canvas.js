class App
{
    runApplication()
    {
        
 
        console.log("Hello world");
        
        let canvas = document.getElementById("canvasId")
            let g = canvas.getContext("2d");
                 g.fillRect(20,20,20,20);




    console.log(canvas)
        


            }

}

let app = new App();
app.runApplication();
