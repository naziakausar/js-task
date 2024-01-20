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
  // form.addEventListener("submit", function (alert("data is not entered")))
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nameValue = document.getElementById("name").value;
    const mathValue = document.getElementById("math").value;
    const urduValue = document.getElementById("urdu").value;
    const physicsValue = document.getElementById("physics").value;
    const biologyValue = document.getElementById("biology").value;
    const englishValue = document.getElementById("English").value;
  
    if (nameValue === "" || mathValue === "" || urduValue === "" || physicsValue === "" || biologyValue === "" || englishValue === "") {
      alert("Please fill this field");
    } else {
      const stdtobject = {
        Name: nameValue,
        mathMarks: mathValue,
        urduMarks: urduValue,
        physicsMarks: physicsValue,
        biologyMarks: biologyValue,
        englishMarks: englishValue
      };
  
      student.push(stdtobject);
  
      const mytable = document.getElementsByClassName("your-table-class")[0]; // Access the first element in the collection
      console.log(mytable);
  
      const showtdata = student.map(item => (
        `<tr>
          <td>${item.Name}</td>
          <td>${item.mathMarks}</td>
          <td>${item.urduMarks}</td>
          <td>${item.physicsMarks}</td>
          <td>${item.biologyMarks}</td>
          <td>${item.englishMarks}</td>
        </tr>`
      ));
  
      mytable.innerHTML = showtdata.join('');
      hideResult();
    }
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

