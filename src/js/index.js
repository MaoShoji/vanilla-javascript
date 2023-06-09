const h1 = document.querySelector("h1");
const button = document.querySelector("button");

function handleClick() {
  let currentH1Color = h1.style.color;
  if (currentH1Color == "orange") {
    h1.style.color = "teal";
  } else {
    h1.style.color = "orange";
  }
}

button.addEventListener("click", handleClick);
