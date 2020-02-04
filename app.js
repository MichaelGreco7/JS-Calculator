// Select Our Elements
const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

// Create for loop that goes through all buttons

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
  });
}

equalBtn.addEventListener("click", function() {
  if (screen.value === "") {
    alert("Input Is Empty");
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clearBtn.addEventListener("click", function() {
  screen.value = "";
});
