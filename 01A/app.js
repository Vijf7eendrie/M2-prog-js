class App
{
    runApplication()
    {
        this.greeting = "Starting up";
 
        console.log("Hello world");
        this.versienummer = 0.9;
        this.versiedatum = "2023-11-23";
        this.auteur =  "Rayan" 
        this.copyright = "Rayan" 
        this.distributeur = "Jouw Distributeur";
        this.darkmode = false;
    }

}

let app = new App();
app.runApplication();
console.log("Versienummer:", app.versienummer);
console.log("Versiedatum:", app.versiedatum);
console.log("Auteur:", app.auteur);
console.log("Copyright:", app.copyright);
console.log("Distributeur:", app.distributeur);
console.log("Darkmode:", app.darkmode);