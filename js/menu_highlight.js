
function menuHighlight() {
    var pgurl = document.location.pathname.substr(document.location.pathname.lastIndexOf("/") + 1);
    var a = document.querySelectorAll('.menu-list li a');
    a.forEach(function (elem) {
        if (elem.getAttribute("href").substr(elem.getAttribute("href").lastIndexOf("/") + 1) == pgurl) {
            elem.classList.add("current")
        }
    });
}

menuHighlight()
