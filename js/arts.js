const itemlist = document.getElementById('itemList') 
const bottoneBack = document.getElementById('bottoneBack')
const bottoneForward = document.getElementById('bottoneForward')
const itemWitdh = 500
const padding = 50
// creazione di dimensioni costanti per lo scorrimento

bottoneBack.addEventListener('click', function() {
    itemlist.scrollLeft -= (itemWitdh + padding)
    // scroll a sinistra
})
bottoneForward.addEventListener('click', function() {
    itemlist.scrollLeft += (itemWitdh + padding)
    // scroll a destra
})
// al clic del bottone, viene attivato uno scorrimento di lunghezza costante (itemWidth+padding) 
// inizialmente stabilita


let slideCorrente = 1;

let slides = document.getElementsByClassName('slide')
let punti = document.getElementsByClassName('punto')

function setSlide(n) {
    slides[slideCorrente].style.display = "none";
    // nasconde la slide corrente al click della successiva
    slides[n].style.display = "block";
    punti[slideCorrente].style.backgroundColor = 'rgb(222, 222, 222)'
    punti[n].style.backgroundColor = 'rgb(42, 142, 42)';
    // il punto corrispondente alla slide visualizzata [n] mantiene il colore verde fin tanto che ci troviamo 
    // sulla relativa slide, altrimenti [slideCorrente], rimane bianco.
    slideCorrente = n
}

setSlide(0);
// inizialmente viene impostata la prima slide