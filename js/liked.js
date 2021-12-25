

let likedTracks = JSON.parse(localStorage.getItem("likedTracks") || "[]");
likedTracks.sort(function (a, b) { return b - a });
if (likedTracks.length > 0) {
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
        console.log(likedTracks[index]);
        console.log(index);
        items[index].attributes.data.value = song.id;
        items[index].querySelector("#audio").src = '../' + song.audio;
        items[index].querySelector(".item-img").src = '../' + song.img;
        items[index].querySelector(".name").innerHTML = song.name;
        items[index].querySelector(".fa-heart").classList.add('active');
    }
}

