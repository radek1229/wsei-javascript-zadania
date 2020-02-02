const buttons = document.querySelectorAll('.button')

buttons.forEach(element => {
    element.addEventListener("click", function () {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        this.parentElement.style.backgroundColor = randomColor
    })
})