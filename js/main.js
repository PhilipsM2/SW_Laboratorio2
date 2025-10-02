const image = document.getElementById("image");
const navbuttons = document.getElementsByClassName("navbutton");
const username = document.getElementById("user");
const pass = document.getElementById("pass");
const selectedRecetas = document.getElementById("combobox");

image.addEventListener("click", imageListener);
username.defaultValue = "tu@email";
username.addEventListener("focus", usernameListener);

for(let navbutton of navbuttons){
    navbutton.addEventListener("click", navbuttonListener);
}

for(let selectedReceta of selectedRecetas){
    selectedReceta.addEventListener("change", selectedListener);
}

function imageListener(){
    console.log("Image clicked");
}

function navbuttonListener(){
    alert("Redirigiendo a " + this.textContent.toUpperCase());
}

function usernameListener(){
    username.value= " ";
}

function selectedListener(){
    const selectedText = combobox.options[combobox.selectedIndex].text;
    console.log("Receta seleccionada: " + selectedText);
}
