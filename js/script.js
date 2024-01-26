//método querySelector retorna o primeiro elemento que corresponde ao colocado entre ()
const formToDo = document.querySelector("#form_ToDo");
const toDoInput = document.querySelector("#todo-input");
const formLista = document.querySelector("#lista_ToDo");
const formEdit = document.querySelector("#editar_form");
const editInput = document.querySelector("#editar-input");
const cancelarBtn = document.querySelector("#cancelar_botao");

let antigoTitulo;

const saveToDo = (text, done = 0, save = 1) => {

    const toDo = document.createElement ("div")
    toDo.classList.add("ToDo");

    const toDoTitle = document.createElement("h3")
    toDoTitle.innerText = text;
    toDo.appendChild(toDoTitle);

    //botões
    const botaoDone = document.createElement("button")
    botaoDone.classList.add("finish-toDo")
    botaoDone.innerHTML = '<i class="fa-solid fa-check"></i>'
    toDo.appendChild(botaoDone)

    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("edit-toDo")
    botaoEditar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    toDo.appendChild(botaoEditar)

    const botaoApagar = document.createElement("button")
    botaoApagar.classList.add("remove-toDo")
    botaoApagar.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    toDo.appendChild(botaoApagar)

    formLista.appendChild(toDo)

    //apaga o texto do campo "preencher tarefa" assim que o botão de adicionar tarefa é acionado
    toDoInput.value = "";
}

const trocarFormularios = () => {
    formEdit.classList.toggle("hide")
    formToDo.classList.toggle("hide")
    formLista.classList.toggle("hide")
};
//-----------EDIÇÃO DOS ToDos -----------------
            //aqui ele recebe um texto
const updateToDo = (text) => {
    const toDos = document.querySelectorAll(".toDo")

    toDos.forEach((toDo) =>{

        let tituloToDo = toDo.querySelector("h3")

        if(tituloToDo.innerText === antigoTitulo){
            tituloToDo.innerText = text
        }
    });

}

//---------EVENTOS--------
//addEventListener adiciona um evento a um elemento
//innerHtml retorna um elemento da html
formToDo.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = toDoInput.value;

    if(inputValue) {
        saveToDo(inputValue)
    } 
});

//evento dos botões das tarefas

document.addEventListener("click", (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let tituloToDo;

    //aqui ele verifica se existe um elemento pai (parentEl) e se o mesmo tem um título (h3)
    if(parentEl && parentEl.querySelector("h3")){
        tituloToDo = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-toDo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-toDo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-toDo")){
        trocarFormularios()

        editInput.value = tituloToDo
        antigoTitulo = tituloToDo
    }
});

cancelarBtn.addEventListener("click", (e) => {
    e.preventDefault()
    trocarFormularios();
})

formEdit.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = formEdit.value
    //ele vai checar, e se estiver vazio, a edição é cancelada
    if(editInputValue){
        //e aqui dentro ele atualiza
        updateToDo(editInputValue)
    }

    trocarFormularios()
})






// MUSICA
var myMusic= document.getElementById("music");

function play() {
myMusic.play();
}

function pause() {
myMusic.pause();

}

