var startTime = new Date().getTime();

window.onload = function () {
    var loadtime = new Date().getTime() - startTime;
    document.querySelector('#loading-speed').innerHTML = "Время загрузки страницы: " + loadtime + "ms"

}