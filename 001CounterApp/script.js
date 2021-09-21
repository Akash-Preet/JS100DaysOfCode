let counterSpan = document.querySelector(".counter");
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    counterSpan.innerHTML++;
  }
  if (e.target.classList.contains("reset")) {
    counterSpan.innerHTML = 0;
  }
  if (e.target.classList.contains("subtract")) {
    counterSpan.innerHTML--;
  }
  setColor();
});

function setColor() {
  if (counterSpan.innerHTML > 0) {
    counterSpan.style.color = "white";
  } else if (counterSpan.innerHTML < 0) {
    counterSpan.style.color = "red";
  } else {
    counterSpan.style.color = "black";
  }
}

//let counterSpan = document.querySelector(".counter");
// let subtract = document.querySelector(".subtract");
// let add = document.querySelector(".add");
// let reset = document.querySelector(".reset");

// subtract.addEventListener("click", () => {
//   counterSpan.innerHTML--;
// });

// reset.addEventListener("click", () => {
//   counterSpan.innerHTML = 0;
// });

// add.addEventListener("click", () => {
//   counterSpan.innerHTML++;
// });
