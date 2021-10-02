let $title = document.getElementById("title");
let $description = document.getElementById("description");
let $button = document.getElementById("button");
let $div = document.getElementById("div");

let recovery = () => {
    if (!localStorage.getItem("content")) {
        alert("mal")
    }else {
        let content = localStorage.getItem("content")
        $div.insertAdjacentHTML("beforeend", content)
    }
}

recovery();

$button.addEventListener("click", () => {
    if ($title.value == "" || $description.value == "") {
        alert("Ingresa una tarea")
    }else {
        let content = `
        <div style="margin: 15px; border: 2px solid transparent; border-radius: 10px; background-color: rgb(252, 92, 87); height: 4em; button {color: black;}">
            <h3>${$title.value}</h3>
            <p>${$description.value}</p>
            <button onclick="borrar(this)">Borrar</button>
        </div> 
        `
        $div.insertAdjacentHTML("beforeend", content)
        $title.value = ""
        $description.value = ""
    }
})

let borrar = (element) => {
    element.parentElement.remove()
}

let save = () => {
    localStorage.setItem('content', $div.innerHTML)
}

window.onbeforeunload = () => {
    return save();
}