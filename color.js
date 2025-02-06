const generator = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}


let setMe
console.log(typeof setMe)
const startChangeColor = function () {
    if(!setMe){
        setMe = setInterval(changeColor, 1000)

    }
    function changeColor() {
        document.body.style.backgroundColor = generator()
    }
}
const stopChangeColor = function () {
    clearInterval(setMe)
    setMe = null;
}
document.querySelector("#start").addEventListener('click', startChangeColor)
document.querySelector("#stop").addEventListener('click', stopChangeColor)
