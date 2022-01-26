let dati = [];

function fetchDati(){
    fetch('C:/Users/Utente/Desktop/es2/dati.json')
    .then(res=>res.json())
    .then(json=>{
        dati = json;
        CaricaDati();
    })
    .catch(err=>alert(err));
}
fetchDati();

const container = document.querySelector("tbody");

function CaricaDati(){
    // svuota tabella
    // container.innerHTML="";
    while(container.firstChild) container.removeChild(container.firstChild);

    for(var k=0; k<dati.length; ++k){
        const tr = document.createElement("tr");
        for(var prop in dati[k]){
            let item = dati[k][prop];
            if(prop === 'id'){
                // appende colonna con data in formato francese (con 0 iniziali)
                appendColumn(tr, new Date(item.title));
                // appende colonna con luogo di nascita
                appendColumn(tr, item.url);
            }else
                appendColumn(tr, item);
        }
        const azioni = document.createElement("td");
        azioni.classList.add("btn-group")
        
        // const modifica = document.createElement("button");
        // //modifica.innerHTML="MODIFICA";
        // modifica.classList.add("btn","btn-info");
        // modifica.addEventListener('click', OnModifica);

        // const elimina = document.createElement("button");
        // elimina.innerHTML="ELIMINA";
        // elimina.classList.add("btn","btn-danger");
        // elimina.addEventListener('click', OnElimina);
        
        // azioni.appendChild(modifica);
        // azioni.appendChild(elimina);

        tr.appendChild(azioni);

        container.appendChild(tr);
    }
}