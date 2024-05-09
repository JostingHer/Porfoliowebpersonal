
//Declaramos variables
const side_menu = document.getElementById("menu_side");
const btn_open = document.getElementById("btn_open");
const body = document.getElementById("body");
const correo = document.getElementById("boton-copiar-correo");
const copyBtn = document.querySelector(".copy-btn");

copyBtn.addEventListener("click", () => {
    const copyInput = document.getElementById("copy-link-input");

    copyInput.select();
    copyInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyInput.value);

    const copyText = document.getElementById("copy-text");
    copyText.innerHTML = "Copiado!";
});


//Evento para mostrar y ocultar menú
function open_close_menu() {
    if (window.innerWidth > 760) {
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }
}
//Ejecutar función en el evento click
btn_open.addEventListener("click", open_close_menu);
//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    } else {
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});