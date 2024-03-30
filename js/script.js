let texts =['/img/les.webpт', 'Hello', 'Bonjour']

let slider = document.querySelector('#slider')

let i = 0

setInterval(()=>{
    slider.textContent = texts[i]
    i++
    if(i==texts.length){
        i=0
    }
},1000)

let imgs =['/img/les.webp', 'Hello', 'Bonjour']
JSON.stringify.imgs