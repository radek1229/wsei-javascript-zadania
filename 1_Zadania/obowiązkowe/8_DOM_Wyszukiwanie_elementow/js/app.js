document.addEventListener("DOMContentLoaded", function () {
    //zadanie 0

    var title = document.getElementsByClassName('title')[0];

    function getDataAnimation(element) {
        var animation = element.getAttribute('data-animation')
        return animation
    }
    console.log(getDataAnimation(title))

    //zadanie 1

    var home_element1 = document.getElementById('home')
    console.log(home_element1)
    var home_element2 = document.querySelector('#home')
    console.log(home_element2)
    var li_element = document.querySelector('ul li[data-direction]')
    console.log(li_element)
    var block_element = document.querySelector('.block')
    console.log(block_element)

    //zadanie 2 

    var li_elements = document.querySelectorAll('nav li')
    console.log(li_elements)
    var paragraphs = document.querySelectorAll('div p')
    console.log(paragraphs)
    var divs = document.querySelectorAll('article div')
    console.log(divs)

    //zadanie 3

    var tag = document.querySelector('article[class="first"]')
    console.log(tag.querySelectorAll('h1').length)

});