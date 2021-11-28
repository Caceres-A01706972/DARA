var btn = document.querySelector(".bubble>button");
var menu = document.querySelector(".bubble.menu");
var isOpen = false;
btn.addEventListener("click", function() {
  menu.className = !isOpen ? "bubble menu active" : "bubble menu";
  isOpen = !isOpen;
});


const BtnAdd = document.querySelector(".boton");
const NewContainer = document.getElementById("nuevo-container");

BtnAdd.addEventListener("click",AddNew);

/*function AddNew() {
  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");
  

  NewContainer.appendChild(newDiv);
  
  NewContainer.cla
  
}*/



function AddNew() {

  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");

  const imagen = document.createElement("img");
  imagen.classList.add("foto-planta")
  imagen.src = "/Images/savila.jpg"

  const cartaContainer = document.createElement("div");
  cartaContainer.classList.add("carta-container");

  /*var documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(newDiv);*/
  NewContainer.appendChild(newDiv);
  newDiv.appendChild(imagen);
  newDiv.appendChild(cartaContainer);

  const h4 = document.createElement("h4");
  h4.setAttribute("style", "text-align: center;")
  h4.innerText = "Savila";
  cartaContainer.appendChild(h4);
  
}