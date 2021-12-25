let itemInnerHTML = '<div class="item" data=""><div class="itemtp-container"><audio src="" id="audio"></audio><div id="wrapper"><img src="" alt="img" class="item-img"></div><span><i class="fas fa-3x fa-play" onclick="playSong(this)"></i></span><div class="options"><span><i class="fas fa-heart fa-lg" onclick="likeProduct(this)"></i></span><span><i class="fas fa-download fa-lg" onclick="downloadProduct(this)"></i></span></div></div><div class="itembt-container"><p class="name"></p><!-- <p class="info"></p> --></div></div> '
let likedTracks = JSON.parse(localStorage.getItem("likedTracks") || "[]");
console.log(likedTracks)
function createItems() {
    let itemsInnerHtml = ''
    for (let index = 0; index < songs.length; index++) {
        itemsInnerHtml += itemInnerHTML;
    }
    document.querySelector('.items').innerHTML = itemsInnerHtml
}

createItems();
const items = document.querySelectorAll(".item");
for (let index = 0; index < songs.length; index++) {
    const song = songs[index];
    items[index].attributes.data.value = song.id;
    items[index].querySelector("#audio").src = song.audio;
    items[index].querySelector(".item-img").src = song.img;
    items[index].querySelector(".name").innerHTML = song.name;
    if (likedTracks.length > 0) {
        console.log(likedTracks.indexOf(song.id));
        if (likedTracks.indexOf(song.id) != -1) {
            items[index].querySelector(".fa-heart").classList.add('active');
            console.log(items[index].querySelector(".fa-heart").classList)
        }
    }
}