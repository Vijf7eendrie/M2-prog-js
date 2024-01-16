class App {
    runApplication() {
        console.log("hello world!")

        let array1 = ["Artiest1", "Artiest2", "Artiest3"];
        console.log(array1);
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            console.log(i + ": " + element);
        }
        array1.push("bob dylan", "prince")
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            console.log(i + ": " + element);
        }

        let array = ["Artiest1", "Artiest2", "Artiest3"];
        array.push("bob dylan", "prince")
        let indexToRemove = array.indexOf("bob dylan")
        array.splice(indexToRemove, 2)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": " + element);
        }
        array.push("Artiest5", "Artiest6")
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": " + element);
        }

        let nummers = [2, 5, 7];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i];
            var optellen = element + (1)
            console.log(optellen)
        }

        let headersByCssClass = document.getElementsByClassName("bandName");
        console.log(headersByCssClass);
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element);
        }

        let mijnH1 = document.getElementById("headerId")
        console.log(mijnH1.innerText);
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element.innerText);
        }

        mijnH1.innerText = "Nieuwe text";
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element.innerText)
        }

        headersByCssClass[0].innerText = "ABC";
        headersByCssClass[1].innerText = "DEF";
        headersByCssClass[2].innerText = "GHI";
        headersByCssClass[3].innerText = "JKL";
        headersByCssClass[4].innerText = "MNO";
        
    }
}

let app = new App();
app.runApplication();