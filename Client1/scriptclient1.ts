
    console.log("Client läuft"); //Testausgabe

    const url: string = "http://127.0.0.1:3000"; //URL Adresse, auf der der Server aktiv ist.
    const path1: string = "/"; //default
    const path2: string = "/convertDate"; //convertDate
    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("eingabedatum"); //Referenzieren des Formulars
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button"); //Referenzieren des Send-Buttons

    //EventListener für ein Click-Event aud den sendButton
    sendButton.addEventListener("click", function(evt: Event){
        evt.preventDefault(); //Vermeiden, dass Event wie gewöhlich ausgeführt wird
        sendForm(); // sendForm-Funktion aufrufen.
    });

    console.log(myForm, sendButton); //Konsole-Log zum testen der HTML-Referenzen

    async function sendForm(): Promise<void> {

        //Vorbereiten der Formulardaten zum Sende-Prozess
        let formData: FormData= new FormData(myForm); //Formulardaten mit unserem Formular initialisieren.
        let query: URLSearchParams = new URLSearchParams(<any>formData); //Get-Parameter vorbereiten
        let urlWithQuery: string = url + path1 + "wurdehinzugefügt" + query.toString(); //Formatierung der URL zum Senden an den Server
       
        let response: Response = await fetch(urlWithQuery); // Senden der Anfrage und warten auf Antwort
        let responseText: string = await response.text(); // Warten auf den Response-Text;
        console.log(responseText); // Ausgabe der Server-Antwort in der Konsole
    }
