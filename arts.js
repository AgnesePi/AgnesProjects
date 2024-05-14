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