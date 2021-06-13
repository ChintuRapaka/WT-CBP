function loader() {
  var d1 = document.querySelectorAll(".dice")[0];
  var d2 = document.querySelectorAll(".dice")[1];
  var r1 = Math.ceil(Math.random() * 6);
  var r2 = Math.ceil(Math.random() * 6);
  var h = document.querySelector("h1#winner em");
  while (r1 === r2) {
    r2 = Math.ceil(Math.random() * 6);
  }
  if (r1 > r2) {
    h.innerHTML = 1;
  } else {
    h.innerHTML = 2;
  }
  var img1 = `images/diceRoller/Group ${r1}.png`;
  //   d1.innerHTML = r1;
  d1.innerHTML = `<img src="${img1}"/>`;
  var img2 = `images/diceRoller/Group ${r2}.png`;
  //   d2.innerHTML = r2;
  d2.innerHTML = `<img src="${img2}"/>`;
}
