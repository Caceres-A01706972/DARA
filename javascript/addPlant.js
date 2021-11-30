//Para el bubble menu
var btn = document.querySelector(".bubble>button");
var menu = document.querySelector(".bubble.menu");
var isOpen = false;
btn.addEventListener("click", function() {
  menu.className = !isOpen ? "bubble menu active" : "bubble menu";
  isOpen = !isOpen;
});


//Para agregar una Suculenta
const BtnAddSuculenta = document.querySelector(".plants-suculenta");
const NewContainer = document.getElementById("nuevo-container");

BtnAddSuculenta.addEventListener("click",AddNewSuculenta);


function AddNewSuculenta() {

  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");

  const imagen = document.createElement("img");
  imagen.classList.add("foto-planta")
  imagen.src = "/Images/suculenta.png"

  const cartaContainer = document.createElement("div");
  cartaContainer.classList.add("carta-container");

  /*var documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(newDiv);*/
  NewContainer.appendChild(newDiv);
  newDiv.appendChild(imagen);
  newDiv.appendChild(cartaContainer);

  const h4 = document.createElement("h4");
  h4.setAttribute("style", "text-align: center;")
  h4.innerText = "Suculenta";
  cartaContainer.appendChild(h4);
  
}


//Para agregar un Cactus
const BtnAddCactus = document.querySelector(".plants-cactus");
BtnAddCactus.addEventListener("click",AddNewCactus);

function AddNewCactus() {

  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");

  const imagen = document.createElement("img");
  imagen.classList.add("foto-planta")
  imagen.src = "/Images/cactus.png"

  const cartaContainer = document.createElement("div");
  cartaContainer.classList.add("carta-container");

  /*var documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(newDiv);*/
  NewContainer.appendChild(newDiv);
  newDiv.appendChild(imagen);
  newDiv.appendChild(cartaContainer);

  const h4 = document.createElement("h4");
  h4.setAttribute("style", "text-align: center;")
  h4.innerText = "Cactus";
  cartaContainer.appendChild(h4);
  
}


//Para agregar un lirio
const BtnAddLirios = document.querySelector(".plants-lirios");
BtnAddLirios.addEventListener("click",AddNewLirios);

function AddNewLirios() {

  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");

  const imagen = document.createElement("img");
  imagen.classList.add("foto-planta")
  imagen.src = "/Images/lirios.png"

  const cartaContainer = document.createElement("div");
  cartaContainer.classList.add("carta-container");

  /*var documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(newDiv);*/
  NewContainer.appendChild(newDiv);
  newDiv.appendChild(imagen);
  newDiv.appendChild(cartaContainer);

  const h4 = document.createElement("h4");
  h4.setAttribute("style", "text-align: center;")
  h4.innerText = "Lirios";
  cartaContainer.appendChild(h4);
  
}






//Para agregar un Jade
const BtnAddJade = document.querySelector(".plants-jade");
BtnAddJade.addEventListener("click",AddNewJade);

function AddNewJade() {

  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");

  const imagen = document.createElement("img");
  imagen.classList.add("foto-planta")
  imagen.src = "/Images/jade.png"

  const cartaContainer = document.createElement("div");
  cartaContainer.classList.add("carta-container");

  /*var documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(newDiv);*/
  NewContainer.appendChild(newDiv);
  newDiv.appendChild(imagen);
  newDiv.appendChild(cartaContainer);

  const h4 = document.createElement("h4");
  h4.setAttribute("style", "text-align: center;")
  h4.innerText = "Jade";
  cartaContainer.appendChild(h4);
  
}



//Para agregar un Anturio
const BtnAddAnturio = document.querySelector(".plants-anturio");
BtnAddAnturio.addEventListener("click",AddNewAnturio);

function AddNewAnturio() {

  const newDiv = document.createElement("div");
  console.log("add");
  //newDiv.classList.add("div-shadow");
  newDiv.classList.add("nueva-carta");
  const imagen = document.createElement("img");
  imagen.classList.add("foto-planta")
  imagen.src = "/Images/anturio.png"


  const cartaContainer = document.createElement("div");
  cartaContainer.classList.add("carta-container");

  /*var documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(newDiv);*/
  NewContainer.appendChild(newDiv);
  newDiv.appendChild(imagen);
  newDiv.appendChild(cartaContainer);

  const h4 = document.createElement("h4");
  h4.setAttribute("style", "text-align: center;")
  h4.innerText = "Anturio";
  cartaContainer.appendChild(h4);

}


