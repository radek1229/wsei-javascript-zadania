document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //zadanie 0 

    function getDatasInfo(links) {
        var retArray = []
        for (let i = 0; i < links.length; i++) {
            retArray.push(links[i].getAttribute('data-color'))
        }
        return retArray
    }
    console.log(getDatasInfo(links))

    //zadanie 1

    console.log(homeElement)
    for (let counter = 0; counter < childElements.length; counter++) {
        console.log(counter)
    }
    console.log(banner)

    for (let counter = 0; counter < blocks.length; counter++) {
        console.log(counter)
    }
    for (let counter = 0; counter < links.length; counter++) {
        console.log(counter)
    }

    //zadanie 2

    console.log(blocks.innerHTML)
    console.log(blocks.outerHTML)
    //innerHTML zawiera znaczniki bez div a outerHTML zawiera znaczniki z div

    blocks.innerHTML = 'Nowa wartość diva o klasie blocks'
    console.log(blocks.innerHTML)
    //zwraca ustawioną wartość 'Nowa wartość diva o klasie blocks'

    //zadanie trzy

    var footer = document.getElementById("mainFooter");

    function getId(footer) {
        return footer.getAttribute('id')
    }
    console.log(getId(footer))

    //zadanie cztery

    function getTags(elements) {
        var Array1 = [];

        Array.prototype.forEach.call(elements, element => {
            Array1.push(element.tagName)
        });

        return Array1;
    }
    console.log(getTags(childElements))

    //zadanie pięć

    function getClassInfo(element) {
        return element.classList
    }
    console.log(getClassInfo(banner))

    //zadanie sześć

    function setDataDirection(_elements) {
        for (let i = 0; i < _elements.length; i++) {
            console.log(_elements[1].dataset.direction)
            if (!_elements[i].dataset.direction !== 'top') {
                _elements[i].dataset.direction = 'top'
            }
        }
    }
    const el = document.querySelectorAll('nav ul li')
    console.log(setDataDirection(el))


});