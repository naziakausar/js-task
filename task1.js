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
 

  if (
    nameValue === "" ||
    mathValue === "" ||
    urduValue === "" ||
    physicsValue === "" ||
    biologyValue === "" ||
    englishValue === ""
  ) {
    alert("Please fill required field");
  } else {
    
    const total =Number(mathValue)+Number(urduValue)+Number(physicsValue)+Number(biologyValue)+Number(englishValue);

    let totalValue= 500;
    const pct = (total/totalValue)*100;
   let numberValues= 5;
  const average = total/numberValues;



    const stdtobject = {
      Name: nameValue,
      mathMarks: mathValue,
      urduMarks: urduValue,
      physicsMarks: physicsValue,
      biologyMarks: biologyValue,
      englishMarks: englishValue,
      totalMarks:total,
      per_data:pct,
      avr_data:average
    };

    student.push(stdtobject);

    const mytable = document.getElementsByClassName("your-table-class")[0]; // Access the first element in the collection
    console.log(mytable);

    const showtdata = student.map(
      (item) =>
        `<tr>
          <td>${item.Name}</td>
          <td>${item.mathMarks}</td>
          <td>${item.urduMarks}</td>
          <td>${item.physicsMarks}</td>
          <td>${item.biologyMarks}</td>
          <td>${item.englishMarks}</td>
          <td>${item.totalMarks}</td>
          <td>${item.per_data}</td> 
          <td>${item.avr_data}</td>
          <td><button> Edit</button>
          <button >Delete</button>
          </td>
        </tr>`
    );

     mytable.innerHTML = showtdata.join("");
     const totalMarks =
     stdtobject.mathMarks +
    stdtobject.urduMarks +
     stdtobject.physicsMarks +
     stdtobject.biologyMarks +
     stdtobject.englishMarks;

  //    const totalrow= `<tr>
  //      <td>${stdtobject.mathMarks}</td>
  //   <td>${stdtobject.urduMarks}</td>
  //    <td>${stdtobject.physicsMarks}</td>
  //     <td>${stdtobject.biologyMarks}</td>
  //    <td>${stdtobject.englishMarks}</td>
  //  </tr>`;

 
     

    // const nameValues = document.getElementById("name");
    // nameValues.value = "";
    // const mathValues = document.getElementById("math");
    // mathValues.value = "";
    // const urduValues = document.getElementById("urdu");
    // urduValues.value = "";
    // const physicsValues = document.getElementById("physics");
    // physicsValues.value ="";
    // const biologyValues = document.getElementById("biology");
    // biologyValues.value ="";
    // const englishValues = document.getElementById("English");
    // englishValues.value = "";
      const allValues = document.querySelectorAll('input');
    
      allValues.forEach(singleInput => singleInput.value ='');
  //  const formToReset = document.getElementById("form");
  //  formToReset.reset();
  //  output.innerHTML += "The form is resetted successfully!"
       hideResult();
       console.log("==",allValues,student);
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
