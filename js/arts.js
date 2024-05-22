const itemlist = document.getElementById('itemList') 
const bottoneBack = document.getElementById('bottoneBack')
const bottoneForward = document.getElementById('bottoneForward')
const itemWitdh = 500
const padding = 50

bottoneBack.addEventListener('click', function() {
    itemlist.scrollLeft -= (itemWitdh + padding)
})
bottoneForward.addEventListener('click', function() {
    itemlist.scrollLeft += (itemWitdh + padding)
})

let slideCorrente = 1;

let slides = document.getElementsByClassName('slide')
let punti = document.getElementsByClassName('punto')

function setSlide(n) {
    slides[slideCorrente].style.display = "none";
    punti[slideCorrente].style.backgroundColor = 'rgb(222, 222, 222)'
    slides[n].style.display = "block";
    punti[n].style.backgroundColor = 'rgb(42, 142, 42)';
    slideCorrente = n
}

setSlide(0);