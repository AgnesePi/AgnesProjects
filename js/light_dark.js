document.addEventListener('DOMContentLoaded', function() {
    var temaSalvato = localStorage.getItem('tema');

    if (temaSalvato === 'light') {
        document.body.classList.add('light');
    }

    document.getElementById('changeMode').addEventListener('click', function() {
        document.body.classList.toggle('light');
        if (document.body.classList.contains('light')) {
            localStorage.setItem('tema', 'light');
        } else {
            localStorage.removeItem('tema');
        }
    });
});

// al caricamento della pagina, viene ricercato all'interno del local storage la costante "tema". Se questa è già 
// presente, impostata come "light", allora viene aggiunta la classe "light", su ogni classe nel css che ne 
// è provvista. Questo permette ad ogni caricamento di una pagina (DOMContentLoaded), di avere già caricato il tema
// scelto in precedenza. 
// 
// Al click del div chiamato "changeMode", viene svolta la funzione toggle (attiva se disattivata, e disattiva
// se attivata) sulla classe chiamata "light". Ora, se nella lista di classi quindi assegnate al body è inclusa
// la classe "light", perché è stato premuto il pulsante, allora, questa informazione viene salvata all'interno 
// del local storage, precisamente nella variabile "tema". Altrimenti, se la classe "light" non è presente, viene
// rimosso l'item "tema". 
// 
// al successivo caricamento, quindi al rientro nel primo if, "tema" avrà quindi assegnata o non
// assegnata a sé la classe "light", e questo if farà in modo di applicare o meno lo stile scelto prima del
// ricaricamento alla pagina stessa.