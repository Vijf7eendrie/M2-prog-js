class User
{
    constructor(name)
    {
        this.name = name;
    }

    wieBenIk()
    {
        console.log(this.name);
    }
}

class App
{
    runApplication()
    {
        console.log("Hello world!");
        
        let persoon1 = new User("persoon1");
        let persoon2 = new User("persoon2");
        let persoon3 = new User("persoon3");
        let persoon4 = new User("persoon4");
        let persoon5 = new User("persoon5");
        let persoon6 = new User("persoon6");

        persoon1.wieBenIk(); //this.name is "persoon1" en de user is persoon
        persoon2.wieBenIk(); //this.name is "persoon2" en de user is persoon
        persoon3.wieBenIk(); //this.name is "persoon3" en de user is persoon
        persoon4.wieBenIk(); //this.name is "persoon4" en de user is persoon
        persoon5.wieBenIk(); //this.name is "persoon5" en de user is persoon
        persoon1.wieBenIk(); //this.name is "persoon6" en de user is persoon
        persoon6.wieBenIk(); //this.name is "persoon" en de user is persoon
        persoon3.wieBenIk(); //this.name is "persoon" en de user is persoon
        persoon4.wieBenIk(); //this.name is "persoon" en de user is persoon
        persoon3.wieBenIk(); //this.name is "persoon" en de user is persoon
    }
}

let app = new App();
app.runApplication();

