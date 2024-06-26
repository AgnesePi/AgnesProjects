const itemlist = document.getElementById('itemList') 
const bottoneBack = document.getElementById('bottoneBack')
const bottoneForward = document.getElementById('bottoneForward')

// creazione di dimensioni costanti per lo scorrimento
const itemWitdh = 500
const padding = 50

// al clic del bottone, viene attivato uno scorrimento di lunghezza costante (itemWidth+padding) 
// inizialmente stabilita

// scroll a sinistra
bottoneBack.addEventListener('click', function() {
    itemlist.scrollLeft -= (itemWitdh + padding)
})

// scroll a destra
bottoneForward.addEventListener('click', function() {
    itemlist.scrollLeft += (itemWitdh + padding)
})

let slideCorrente = 1;

let slides = document.getElementsByClassName('slide')
let punti = document.getElementsByClassName('punto')

function setSlide(n) {
    // nasconde la slide in posizione slideCorrente al click della successiva
    slides[slideCorrente].style.display = "none";

    // la slide in posizione n viene mostrata
    slides[n].style.display = "block";

    // il punto corrispondente alla slide visualizzata [n] mantiene il colore verde fin tanto che ci troviamo 
    // sulla relativa slide, altrimenti [slideCorrente], rimane bianco
    punti[slideCorrente].style.backgroundColor = 'rgb(222, 222, 222)'
    punti[n].style.backgroundColor = 'rgb(42, 142, 42)';
    
    // adesso alla var slideCorrente è associato il valore n che corrisponde alla slide prima selezionata 
    // che ora è "in uscita", quindi che deve essere nascosta al click della successiva.
    slideCorrente = n
}

// inizialmente viene impostata la prima slide
setSlide(0);