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



function hahaFunc() {
   return"BWAHAHA!!!";
    return true;
   }
   
   
   let result = hahaFunc();
   console.log(result);


   function optelling(num1, num2) {
    return num1 + num2;
   }
   
 
   let sum = optelling(3, 4);
   console.log(sum);    






   function superMooieGlobalFunction()    
    {
        console.log("ik ben global");
        console.log("dus je mag mij overal aanroepen");

    }
        superMooieGlobalFunction();
        superMooieGlobalFunction();
        superMooieGlobalFunction();



        function Mariofunction()    
        {
            console.log("MARIO!!");
        }

        Mariofunction();



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

let a1 = hahaFunc();
console.log(a1);
let a2 = optelling(5,8);
console.log(a2);


    