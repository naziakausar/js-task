// function changecolor(){

//     document.body.style.backgroundColor ="green";

// }
let color = ["red", "green", "yellow", "blue"];
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let randomColor = color[Math.floor(Math.random() * color.length)];
  // console.log(Math.floor(Math.random()*color.length));
  document.body.style.background = randomColor;
});
