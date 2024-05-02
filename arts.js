const itemlist = document.getElementById('itemList') 
const bottoneBack = document.getElementById('bottoneBack')
const bottoneForward = document.getElementById('bottoneForward')
const itemWitdh = 500
const padding = 50

bottoneBack.addEventListener('click', () => {
    itemlist.scrollLeft -= (itemWitdh + padding)
})
bottoneForward.addEventListener('click', () => {
    itemlist.scrollLeft += (itemWitdh + padding)
})
// ok grazie amore mio... continua a non funzion però,  giusto?
// ma no aspe vai su prozzap
// minchia YAY
// allora da questa cosa devi capire questo
// stavi facendo bottoneBack.addEventListener, giusto? Ecco, vuol dire che stavi applicando una funzione a bottoneBack
// il punto è: cos'era prima bottoneBack? Nulla. Hai solamente preso l'elemento con document.getElementById
// ma il punto è che non l'hai assegnato a nulla. Quindi se vuoi usare qualcosa, devi avere prima la variabile
// poi alla variabile cosa assegni? document.getElementById
// ohhh... chiaro...a posto... comunque sì, devi ancora capire bene le funzioni, ma ci sta, sono molto difficili all'inizio
// dai vado a lavurà amore

// bravo.. grazie mille cucciolone!! ti amo!!!!  io ti amo! se tieni aperta la condivisione se aggiungi qualcosa ogni tanto ci dò un occhio!
// va bene patatone!! sarà fatto <3
// buona impaginazione grazie cucciolo! buon lavoro!!