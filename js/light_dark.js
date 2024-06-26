document.addEventListener('DOMContentLoaded', function() {
    // caricata la pagina, ricerca dell'item 'tema' in local storage che viene assegnato alla variabile 'tema salvato'
    let temaSalvato = localStorage.getItem('tema');

    // se il tema 'light' è già presente, viene assegnata la classe css 'light' al body del documento
    // permette il caricamento del tema scelto anche ad un nuovo caricamento della pagina o a un passaggio tra pagine
    if (temaSalvato === 'light') {
        document.body.classList.add('light');
    }
   
    // al click del div 'changeMode', viene svolta la funzione 'toggle' della classe css 'light', che viene 
    // applicata al body. 
    document.getElementById('changeMode').addEventListener('click', function() {
        document.body.classList.toggle('light');

        // se la classe light è stata assegnata, il valore 'light' viene assegnata alla chiave 'tema', che viene
        // salvata in questo modo nel local storage, altrimenti viene rimossa. 

        if (document.body.classList.contains('light')) {
            localStorage.setItem('tema', 'light');
        } else {
            localStorage.removeItem('tema');
        }
        
        // questo fa in modo che al successivo caricamento, tema avrà assegnata o non assegnata a sé la classe 'light'
        // salvata nel local storage, quindi potrà essere ricaricata la modalità prescelta, chiara o scura.
    });
});