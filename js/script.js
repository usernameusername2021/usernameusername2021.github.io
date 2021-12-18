let currentSong = null;
let likedTracks = [];

function likedTracksRemoveItem(item) {
  let index = likedTracks.indexOf(item);
  if (index > -1) {
    likedTracks.splice(index, 1);
  }
}

function refreshBarHeart(elemHeartIsActive) {
  // if element is existing (pressing heart on item card)
  if (elemHeartIsActive != null) {
    if (elemHeartIsActive) {
      document.querySelector('#footer-heart').classList.add('active');
    } else {
      document.querySelector('#footer-heart').classList.remove('active');
    }
  } else {// if pressing heart on bar
    if (currentSong.parentElement.parentElement.parentElement.querySelector('.fa-heart').classList.contains('active')) {
      document.querySelector('#footer-heart').classList.remove('active');
      currentSong.parentElement.parentElement.parentElement.querySelector('.fa-heart').classList.remove('active');
      likedTracksRemoveItem(currentSong.parentElement.parentElement.parentElement);
      // console.log(likedTracks);

    } else {
      document.querySelector('#footer-heart').classList.add('active');
      currentSong.parentElement.parentElement.parentElement.querySelector('.fa-heart').classList.add('active');
      likedTracks.push(currentSong.parentElement.parentElement.parentElement);
      // console.log(likedTracks);

    }
  }
}

document.querySelector("#search-line").oninput = function () {
  let val = this.value.trim().toLowerCase();
  let sItems = document.querySelectorAll(".item");
  if (val != "") {
    sItems.forEach(function (elem) {
      if (elem.innerText.toLowerCase().search(val) == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    sItems.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};

document.querySelector(".menu-ul").onclick = function () {
  document.querySelector("#checkbox-menu").checked = false;
};

function likeProduct(elem) {
  elem.classList.toggle("active");
  if (elem.classList.contains("active")) {
    likedTracks.push(elem.parentElement.parentElement.parentElement.parentElement);
    // console.log(likedTracks);

  } else {
    likedTracksRemoveItem(elem.parentElement.parentElement.parentElement.parentElement);
    //console.log(likedTracks);

  }
  if (currentSong != null) {
    if (currentSong.parentElement.parentElement.parentElement == elem.parentElement.parentElement.parentElement.parentElement) {
      refreshBarHeart(elem.classList.contains("active"));
    }
  }
}


function playSong(elem) {
  let playIsNotActive = elem.classList.contains('fa-pause');
  // pause audio (clicking pause icon on item)
  if (playIsNotActive) {
    //changing pause icon to play icon
    document.querySelector('#footer-play-btn').classList.remove('fa-pause');
    document.querySelector('#footer-play-btn').classList.add('fa-play');
    elem.classList.remove('fa-pause');
    elem.classList.add('fa-play');
  } else {  // play new audio (clicking play icon on item)
    // changing pause icon on prev item
    if (currentSong != null) {
      currentSong.classList.remove('fa-pause')
      currentSong.classList.add('fa-play');
    } else {
      document.querySelector('footer').classList.add('opened');
    }
    //changing play icon to pause icon
    document.querySelector('#footer-play-btn').classList.add('fa-pause');
    document.querySelector('#footer-play-btn').classList.remove('fa-play');
    elem.classList.remove('fa-play');
    elem.classList.add('fa-pause');
    if (currentSong != elem) {
      //setting name/desc/img to play bar
      let item = elem.parentElement.parentElement.parentElement;
      let song_name = item.querySelector('.name').innerText;
      // let song_info = item.querySelector('.info').innerText;
      let song_img = item.querySelector('.item-img').src;
      document.querySelector('.current-song-name').textContent = song_name;
      // document.querySelector('.current-song-info').textContent = song_info;
      document.querySelector('.current-song-img').src = song_img;
      //setting like to play bar
      refreshBarHeart(item.querySelector('.fa-heart').classList.contains('active'));
      currentSong = elem;
    }
  }
}

function footerPlaySong(elem) {
  let playIsActive = elem.classList.contains('fa-pause');
  if (playIsActive) {
    elem.classList.remove('fa-pause');
    elem.classList.add('fa-play');
    currentSong.classList.remove('fa-pause')
    currentSong.classList.add('fa-play');
  } else {
    elem.classList.add('fa-pause');
    elem.classList.remove('fa-play');
    currentSong.classList.add('fa-pause')
    currentSong.classList.remove('fa-play');
  }
}
