document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})

/*Po przeniesieniu tagu script do sekcji head kod nie wykonuje sie poprawnie;
dzieje sie to ponieważ kod wykonuje sie przed zaladowaniem calej strony.
Po dodaniu skryptu do eventlistenera kod wykonuje sie juz po zaladowaniu
calosci strony.*/