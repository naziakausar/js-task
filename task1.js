// function myfunction() {
//   var x = document.getElementById("myid");
//   if (x.innerHTML === "New text") {
//     x.innerHTML = "Swapped New text!";
//   } else {
//     x.innerHTML = "New text";
//   }
// }

function openPopup() {
  const forms = document.getElementById("popupVal");

  // if(forms)
  {
    forms.style.display = "flex";
  }
}
function hideResult() {
  const forms = document.getElementById("popupVal");

  // if(forms)
  {
    forms.style.display = "none";
  }
}

const student = [];

  const form = document.getElementById("form");
  // console.log("form",form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //To Get the values of form fields
    const nameValue = document.getElementById("name").value;
    const mathValue = document.getElementById("math").value;
    const urduValue = document.getElementById("urdu").value;
    const physicsValue = document.getElementById("physics").value;
    const biologyValue = document.getElementById("biology").value;
    const englishValue = document.getElementById("English").value;
    const stdtobject={Name:nameValue,mathMarks:mathValue,urduMarks:urduValue,physicsMarks:physicsValue,biologyiMarks:biologyValue,englishMarks:englishValue};
    student.push(stdtobject);
    console.log(student);
    hideResult();
  
    
    // Do something with the values (for example, log them)
    // console.log("Name:", nameValue);
    // console.log("Math:", mathValue);
    // console.log("Urdu:", urduValue);
    // console.log("Physics:", physicsValue);
    // console.log("Biology:", biologyValue);
    // console.log("English:", englishValue);
  });


// function handlePopup() {
//   var form = document.getElementById("popupVal");
//     if (form.style.display === "none") {
//      form.style.display = "block";
//     } else {
//     form.style.display = "none";

//    }

//  }
// function showResult(){
//   var form =
//   document.getElementsByClassName("popupVal");
//  if (form.style.display === "block") {    form.style.display = "none";
//    } else {
//     form.style.display = "block";

// }

// }
