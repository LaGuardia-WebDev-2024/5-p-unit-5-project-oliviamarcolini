const box = document.getElementById("toggleBox");
let clickCount = 0;
let isClicked = false;

function updateState() {
  box.classList.remove(
    "state-1",
    "state-2",
    "state-3",
    "state-4",
    "state-5",
    "state-6",
    "state-7"
  );

  if (clickCount === 0) {
    box.classList.add("state-1");
    box.textContent = "She might look normal, but she has a really dark secret..";
  } else if (clickCount === 1) {
    box.classList.add("state-2");
    box.textContent = "What? Im not telling!";
  } else if (clickCount === 2) {
    box.classList.add("state-3");
    box.textContent = "Ok, fine, but you have to promise not to tell!";
  } else if (clickCount === 3) {
    box.classList.add("state-4");
    box.textContent = "She has a secret crush on..";
  } else if (clickCount === 4) {
    box.classList.add("state-5");
    box.textContent = "ME! JK, that one is no secret";
  } else if (clickCount === 5) {
    box.classList.add("state-6");
    box.textContent = "Her real SECRET crush is:";
  } else if (clickCount === 6) {
    box.classList.add("state-7");
    box.textContent = "Jon Bon Jovi";
  }
}

box.addEventListener("click", function () {
  isClicked = true;
  clickCount = (clickCount + 1) % 7;
  updateState();
});