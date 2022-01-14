const tableInput = document.querySelector("#table-input");
const options = document.querySelector("#options");
const toDoList = document.querySelector("#toDoList");
let currentState = "all";
let button = document.querySelector("#all");
let list = '';
function checkLocalStorage() {
    if (localStorage.getItem("list") != null) {
        toDoList.innerHTML = localStorage.getItem("list");
        options.classList.remove("inactive");
    }
    document.querySelectorAll("#toDoList li").forEach(function (element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden")
        }
    })
}
checkLocalStorage();
tableInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        var val = this.value.trim()
        if (val != "") {
            var li = document.createElement("li");
            if (options.classList.contains("inactive")) {
                options.classList.remove("inactive");
            }
            li.innerHTML = val;
            li.classList.add("active");
            if (currentState == "completed") {
                li.classList.add("hidden");
            }
            var i = document.createElement("i");
            i.classList.add("fas");
            i.classList.add("fa-trash-alt");
            li.appendChild(i);
            toDoList.appendChild(li);
            tableInput.value = '';
        }
    }
});

toDoList.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
        if ((currentState != "all") && (!ev.target.classList.contains('hidden'))) {
            ev.target.classList.add('hidden');
        }
    } else {
        ev.target.parentElement.remove();
    }

});

function showAll(el) {
    if (!(currentState == "all")) {
        refreshButton(el);
        list = document.querySelectorAll("#toDoList li");
        list.forEach(element => {
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden")
            }
        });
        currentState = "all";
    }
}

function showActive(el) {
    if (!(currentState == "active")) {
        refreshButton(el);
        list = document.querySelectorAll("#toDoList li");
        list.forEach(element => {
            if (element.classList.contains("completed")) {
                element.classList.add("hidden")
            } else if (element.classList.contains("hidden")) {
                element.classList.remove("hidden")
            }
        });
        currentState = "active";
    }
}

function showCompleted(el) {
    if (!(currentState == "completed")) {
        refreshButton(el);
        list = document.querySelectorAll("#toDoList li");
        list.forEach(element => {
            if (!element.classList.contains("completed")) {
                element.classList.add("hidden")
            } else if (element.classList.contains("hidden")) {
                element.classList.remove("hidden")
            }
        });
        currentState = "completed";
    }
}

function refreshButton(el) {
    if (button != null) {
        button.classList.remove("active");
    }
    button = el;
    el.classList.add("active");
}

function saveList() {
    list = document.querySelector("#toDoList").innerHTML;

    localStorage.setItem("list", list);
    console.log(localStorage)
}

