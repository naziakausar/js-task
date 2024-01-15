// function myfunction() {
//   var x = document.getElementById("myid");
//   if (x.innerHTML === "New text") {
//     x.innerHTML = "Swapped New text!";
//   } else {
//     x.innerHTML = "New text";
//   }
// }


// function openpopup() {

//   document.getElementById("popupval").style.display = "block";
 
// }
// function hidepopup() {

//   document.getElementById("popupval").style.display = "none";
 
// }


function handlePopup() {
  var form = document.getElementById("popupVal");
   if (form.style.display === "none") {
    form.style.display = "block";
   } else {
    form.style.display = "none";
    
  }
  
}
function showResult(){
  var form =
  document.getElementsByClassName("popupVal");
  if (form.style.display === "block") {
    form.style.display = "none";
   } else {
    form.style.display = "block";
    
  }
  
  
}
