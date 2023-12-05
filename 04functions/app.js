 function argumentsAreHandy(shoutout) 
   
{   
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}
argumentsAreHandy("crazy shoutout");

function argumentsAreHandy1(shoutout1) 
{   
    console.log("do you want to give a shoutout?");
    console.log(shoutout1);
}
argumentsAreHandy1("insane shoutout");



function argumentsAreHandy2(shoutout2) 
{   
    console.log("do you want to give a shoutout?");
    console.log(shoutout2);
}
argumentsAreHandy1("gekke shoutout");








superMooieGlobalFunction();


   function superMooieGlobalFunction()    
    {
        console.log("ik ben global");
        console.log("dus je mag mij overal aanroepen");

    }
        superMooieGlobalFunction();
        superMooieGlobalFunction();
        superMooieGlobalFunction();



function aanroepVoorbeeld()
{
}
   class App
    {
        runApplication()
        { 
            console.log("hello world!");
            superMooieGlobalFunction();
            
        }
    }


let app = new App();
app.runApplication();

    