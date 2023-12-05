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

    