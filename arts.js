const itemlist = document.getElementById('itemList') 
const bottoneBack = document.getElementById('bottoneBack')
const bottoneForward = document.getElementById('bottoneForward')
const itemWitdh = 500
const padding = 50

bottoneBack.addEventListener('click', () => { console.log('1')
    itemlist.scrollLeft -= (itemWitdh + padding)
})
bottoneForward.addEventListener('click', () => {
    itemlist.scrollRight += (itemWitdh + padding)
})