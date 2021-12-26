var startTime = new Date().getTime();

window.onload = function () {
    var loadtime = new Date().getTime() - startTime;
    console.log("Время загрузки страницы: " + loadtime + "ms")
}