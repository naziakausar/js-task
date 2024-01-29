// function myfunction() {
//   var x = document.getElementById("myid");
//   if (x.innerHTML === "New text") {
//     x.innerHTML = "Swapped New text!";
//   } else {
//     x.innerHTML = "New text";
//   }
// }
const student = [];

let ID;

function openPopup() {
  const forms = document.getElementById("popupVal");

  // if(forms)
  {
    forms.style.display = "flex";
  }
}
function EditDetails(id){
  ID=id;

  openPopup();
  const searchObject=student.find((name)=> name.Id===id);
  // console.log(`object is present in student${searchObject}`);
  document.getElementById("name").value= searchObject.Name;
  document.getElementById("math").value= searchObject.mathMarks;
  document.getElementById("urdu").value= searchObject.urduMarks;
  document.getElementById("physics").value= searchObject.physicsMarks;
  document.getElementById("biology").value= searchObject.biologyMarks;
  document.getElementById("English").value= searchObject.englishMarks;

  
}
const random =function getrandom(){
  const object=math.floor(math.random)* (0,1000);
  return object;
}
console.log(random);
// function deleteDetails(id){
 
//   const searchObject=student.find((name)=> name.Id===id);
//    student.splice(searchObject,1);

// }


// function update(){
//   update()
//   searchObject.Name = document.getElementById("name").value;
//   searchObject.mathMarks = document.getElementById("math").value;
//   searchObject.urduMarks =  document.getElementById("urdu").value;
//   searchObject.physicsMarks =  document.getElementById("physics").value;
//   searchObject.biologyMarks = document.getElementById("biology").value;
//   searchObject.englishMarks =   document.getElementById("English").value;
// }
function hideResult() {
  const forms = document.getElementById("popupVal");

  // if(forms)
  {
    forms.style.display = "none";
  }
}


const form = document.getElementById("form");

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
    Id:1,
    physicsMarks: physicsValue,
    biologyMarks: biologyValue,
    englishMarks: englishValue,
    totalMarks:total,
    per_data:pct,
    avr_data:average,
    
    
  };
  
  
  if (ID){  
    
  const index = student.findIndex((element) => element.Id ===ID);
  
  
  
  
  student.splice(index,1,stdtobject);
  
}
else{
    student.push(stdtobject);
  }
  
  const mytable = document.getElementsByClassName("your-table-class")[0]; // Access the first element in the collection
  
  
  let showtdata = student.map(
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
    <td><button onclick="EditDetails(${item.Id})">Edit</button>
    <button onclick="deleteDetails(${item.Id})">Delete</button>
    </td>
    </tr>`
    );
    

     mytable.innerHTML = showtdata.join("");
    
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
  // function onEdit(td){
      //   selectedRow=td.parentElement.parentElement;
        // document.getElementById("name").value = selectedRow.cells[0].innerHtml;
        // document.getElementById("math").value = selectedRow.cells[1].innerHtml;
        // document.getElementById("urdu").value = selectedRow.cells[2].innerHtml;
        // document.getElementById("physics").value = selectedRow.cells[3].innerHtml;
        // document.getElementById("english").value = selectedRow.cells[4].innerHtml;
      }

  //  const formToReset = document.getElementById("form");
  //  formToReset.reset();
  //  output.innerHTML += "The form is resetted successfully!"
  hideResult();
       
  
}



);

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
  
  function deleteDetails(id) {
    console.log("ID",id);
      const index = student.findIndex((name) => name.Id === id);
  
      if (index !== null) {
        const mytable = document.getElementsByClassName("your-table-class")[0]; // Access the first element in the collection

        console.log("Index",index);
          // Remove one element at the found index
          student.splice(index, 1);
          console.log("Element deleted:", id);
          let showtdata = student.map(
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
            <td><button onclick="EditDetails(${item.Id})">Edit</button>
            <button onclick="deleteDetails(${item.Id})">Delete</button>
            </td>
            </tr>`
            );


            mytable.innerHTML = showtdata.join("");

      } else {
          console.log("Element with ID not found");
      }
  }