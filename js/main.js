const image = document.getElementById("image");
const navbuttons = document.getElementsByClassName("navbutton");
const username = document.getElementById("user");
const pass = document.getElementById("pass");
const selectedRecetas = document.getElementById("combobox");
const newOption = document.createElement("option");
const form = document.getElementById("form");
const images = ["images/head_ft.jpg", "images/carrusel/fresas.jpg", "images/carrusel/limon.jpg", "images/carrusel/mandarinas.jpg",
    "images/carrusel/manzanas.jpg", "images/carrusel/melon.jpg", "images/carrusel/sesamo.jpg"
];
let currentIndex = 0;

image.addEventListener("click", imageListener);
username.defaultValue = "tu@email";
username.addEventListener("focus", usernameListener);
selectedRecetas.addEventListener("change", selectedListener);
newOption.value= "pizzaMala";
newOption.className= "_self";
newOption.text= "Pineapple Pizza";
combobox.add(newOption);
form.addEventListener("submit",submitListener);

for(let navbutton of navbuttons){
    navbutton.addEventListener("click", navbuttonListener);
}

function imageListener(){
    console.log("Image clicked");
}

function navbuttonListener(){
    alert("Redirigiendo a " + this.textContent.toUpperCase());
}

function usernameListener(){
    username.value= "";
}

function selectedListener(){
    const selectedText = combobox.options[combobox.selectedIndex].text;
    console.log("Receta seleccionada: " + selectedText);
    if (combobox.options[combobox.selectedIndex].value =="pizzaMala"){
        console.log("Pizza con piña… Non sei il benvenuto in Italia " + "\u{1F90C}");
    }
}

function submitListener(){
    const userValue = username.value;
    const passValue = pass.value;

    if(userValue.includes("@ehu.eus") && passValue.length>=4){
        alert("Bienvenido " + userValue);
    } else {
        alert("Usuario o contraseña incorrectos.")
    }
}

function changeImage() {
  image.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // vuelve a la primera imagen
  }
}

// Cambiar imagen cada 3 segundos (3000 ms)
setInterval(changeImage, 3000);
