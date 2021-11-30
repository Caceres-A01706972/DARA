const BtnAdd = document.querySelector(".fotosavila3");
const NewContainer = document.getElementById("nuevo-container");

BtnAdd.addEventListener("click",AddNew);

function AddNew() {
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add("div-shadow");
  NewContainer.appendChild(newDiv);
}