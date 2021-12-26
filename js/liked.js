let likedTracks = [];
storage = window.localStorage;
function storageAvailable() {
    try {
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
if (storageAvailable()) {
    likedTracks = JSON.parse(localStorage.getItem("likedTracks") || "[]");
} else {
    console.log("localStorage error: " + storageAvailable())
}


if (likedTracks.length > 0) {
    likedTracks.sort(function (a, b) { return b - a });
    let itemInnerHTML = '<div class="item" data=""><div class="itemtp-container"><audio src="" id="audio"></audio><div id="wrapper"><img src="" alt="img" class="item-img"></div><span><i class="fas fa-3x fa-play" onclick="playSong(this)"></i></span><div class="options"><span><i class="fas fa-heart fa-lg" onclick="likeProduct(this)"></i></span><span><i class="fas fa-download fa-lg" onclick="downloadProduct(this)"></i></span></div></div><div class="itembt-container"><p class="name"></p><!-- <p class="info"></p> --></div></div> '
    function createLikedItems() {
        let itemsInnerHtml = ''
        for (let index = 0; index < likedTracks.length; index++) {
            itemsInnerHtml += itemInnerHTML;
        }
        document.querySelector('.items').innerHTML = itemsInnerHtml;
    }

    createLikedItems();
    const items = document.querySelectorAll(".item");
    for (let index = 0; index < likedTracks.length; index++) {
        const song = songs[songs.length - 1 - likedTracks[index]];
        items[index].attributes.data.value = song.id;
        items[index].querySelector("#audio").src = '../' + song.audio;
        items[index].querySelector(".item-img").src = '../' + song.img;
        items[index].querySelector(".name").innerHTML = song.name;
        items[index].querySelector(".fa-heart").classList.add('active');
    }
}

