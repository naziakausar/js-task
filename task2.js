// function changeimage() {
//   var img = document.getElementById("image");
//   if (img.style.display === "none") {
//     img.style.display = "block";
//   } else {
//     img.style.display = "none";
//     // img.src = "burger image.png";
//   }
// }
function openPopup(){
  const form = document.getElementById('popupVal');

 if(form){form.style.display = 'flex';}
}
function hidePopup(){
  const form = document.getElementById('popupVal');
  if(form){form.style.display = 'none';}
}