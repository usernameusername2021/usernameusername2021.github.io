
async function getImages() {
    const items = document.querySelectorAll(".item");
    try {
        for (i = 1; i <= items.length; i++) {

            let response = await fetch('https://jsonplaceholder.typicode.com/photos/' + i);

            let json = await response.json();
            if (!response.ok) {
                throw new TypeError("Запрос не был выполнен");
            } else {
                items[i - 1].querySelector(".item-img").src = json.url;
            }
        }
    } catch (e) {
        alert(e)
    }
}
getImages();