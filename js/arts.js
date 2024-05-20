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

let slideCorrente = 1;

let slides = document.getElementsByClassName('slide')
let punti = document.getElementsByClassName('punto')

function setSlide(n) {
    slides[slideCorrente].style.display = "none";
    slides[n].style.display = "block";
    slideCorrente = n
}

setSlide(0);