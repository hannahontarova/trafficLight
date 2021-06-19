const colorGreen = document.getElementById('colorGreen')
const colorYellow = document.getElementById('colorYellow')
const colorRed = document.getElementById('colorRed')
const buttonGreen = document.getElementById('buttonGreen')
const buttonYellow = document.getElementById('buttonYellow')
const buttonRed = document.getElementById('buttonRed')

buttonGreen.onclick = function(){
    colorGreen.style.background = 'radial-gradient(white, green)'
    colorYellow.style.background = 'radial-gradient(white, #9e9897)'
    colorRed.style.background = 'radial-gradient(white, #9e9897)'
}
buttonYellow.onclick = function(){
    colorGreen.style.background = 'radial-gradient(white, #9e9897)'
    colorYellow.style.background = 'radial-gradient(white, yellow)'
    colorRed.style.background = 'radial-gradient(white, #9e9897)'
}
buttonRed.onclick = function(){
    colorGreen.style.background = 'radial-gradient(white, #9e9897)'
    colorYellow.style.background = 'radial-gradient(white, #9e9897)'
    colorRed.style.background = 'radial-gradient(white, red)'
}