var startTime = new Date().getTime();

window.onload = function () {
    var loadtime = new Date().getTime() - startTime;
    alert("Вреемя загрузки страницы " + loadtime + " ms");
}