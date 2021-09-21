//select div to change color
let click = document.querySelector(".click");

document.addEventListener("click", () => {
  //toString(16) to get hex values
  let randomHexColor = `#${Math.random().toString(16).substring(2, 8)}`;
  document.body.style.backgroundColor = randomHexColor;
  click.innerHTML = randomHexColor;
  //copy color to clipboard
  navigator.clipboard.writeText(randomHexColor);
});
