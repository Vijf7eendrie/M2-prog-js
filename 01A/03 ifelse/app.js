class App
{
    runApplication()
    {

        console.log("Hello world");

     let title = document.getElementById("newstitle");
     console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {

            title.style.backgroundColor = "#FF0000";

        }else if(random < 0.6){

            title.style.backgroundColor = "#E3E2E2";
        }
     
        else if(random < 0.75){

            title.style.backgroundColor = "#4BACD9";
        }

        else if(random > 0.75){

            title.style.backgroundColor = "#556972";
        }

        

    let newsitem1 = document.getElementsByClassName("headline")[0]
    random = Math.random();
    console.log(random);
    if(random < 0.2)
    {

        newsitem1.style.backgroundColor = "#FF0000";

    }else if(random < 0.6){

        newsitem1.style.backgroundColor = "#E3E2E2";
    }
 
    else if(random < 0.75){

        newsitem1.style.backgroundColor = "#4BACD9";
    }

    else if(random > 0.75){

        newsitem1.style.backgroundColor = "#556972";
    }
    


    let newsitem2 = document.getElementsByClassName("gamenews")[0]

    random = Math.random();
        console.log(random);
        if(random < 0.2)
        {

            newsitem2.style.backgroundColor = "#FF0000";

        }else if(random < 0.6){

            newsitem2.style.backgroundColor = "#E3E2E2";
        }
     
        else if(random < 0.75){

            newsitem2.style.backgroundColor = "#4BACD9";
        }

        else if(random > 0.75){

            newsitem2.style.backgroundColor = "#556972";
        }
    

   













}}



let app = new App();
app.runApplication();
