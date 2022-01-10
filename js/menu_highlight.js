console.log(document.location)
$(function () {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $("#menu-header ul li a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("current");
    })
});