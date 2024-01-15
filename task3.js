const cities = ["vehari", "Multan", "Lahore", "karachi"];

function generateListItems(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `<li>${arg[i]}</li>`;
  }

  return items;
}

const ulList = document.querySelector("main"); // Use querySelector to select the first "main" element

ulList.innerHTML = `<ul>${generateListItems(cities)}</ul>`;

// var tab = ["Home","Shop","About","Contact","Gallery"];
// var list = document.getElementById("list")
// for(1 =0; i< tab.length;i++){
//     var liNode = document.createElement("li");
//     var textNode =document.createTextNode(tab[i]);
//     liNode.appendChild(textNode);
//     list.appendChild(liNode);

// }
