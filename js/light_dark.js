document.addEventListener('DOMContentLoaded', function() {
    let temaSalvato = localStorage.getItem('tema');
    // caricata la pagina, ricerca dell'item 'tema' in local storage che viene assegnato alla variabile 'tema salvato'

    if (temaSalvato === 'light') {
        document.body.classList.add('light');
    }
    // se il tema 'light' è già presente, viene assegnata la classe css 'light' al body del documento
    // permette il caricamento del tema scelto anche ad un nuovo caricamento della pagina o a un passaggio tra pagine

    document.getElementById('changeMode').addEventListener('click', function() {
        document.body.classList.toggle('light');
        // al click del div 'changeMode', viene svolta la funzione 'toggle' della classe css 'light', che viene 
        // applicata al body. 
        if (document.body.classList.contains('light')) {
            localStorage.setItem('tema', 'light');
        } else {
            localStorage.removeItem('tema');
        }
        // se la classe light è stata assegnata, la costante 'light' viene assegnata alla costante 'tema', che viene
        // salvata in questo modo nel local storage, altrimenti viene rimossa. 

        // questo fa in modo che al successivo caricamento, tema avrà assegnata o non assegnata a sé la classe 'ligt'
        // salvata nel local storage, quindi potrà essere ricaricata la modalità prescelta, chiara o scura.
    });
});