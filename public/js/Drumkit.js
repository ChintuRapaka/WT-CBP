dict = {
  W: document.querySelectorAll(".key-name")[0],
  A: document.querySelectorAll(".key-name")[1],
  S: document.querySelectorAll(".key-name")[2],
  D: document.querySelectorAll(".key-name")[3],
  J: document.querySelectorAll(".key-name")[4],
  K: document.querySelectorAll(".key-name")[5],
  L: document.querySelectorAll(".key-name")[6],
};
function active(item) {
  item.classList.add("active");
  makeSound(item.textContent);
  setInterval(() => {
    item.classList.remove("active");
  }, 100);
}
function makeSound(a) {
  let m = new Audio("sounds/DrumKit/" + a + ".wav");
  m.play();
  setInterval(() => {
    m.pause();
  }, 2000);
}
function loader() {
  let boxes = document.querySelectorAll(".key-name");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
      boxes[i].classList.add("active");
      makeSound(boxes[i].textContent);
      setInterval(() => {
        boxes[i].classList.remove("active");
      }, 100);
    });
  }
}
document.onkeypress = (e) => {
  e = e || window.event;
  let charCode = e.keyCode || e.which;
  let charStr = String.fromCharCode(charCode).toUpperCase();
  active(dict[charStr]);
};
