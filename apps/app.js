
function searchFunc() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }      
  }
    
};




function addRow(){
    const appBtn = document.getElementById("appId");
    const newRow = document.getElementById("newRow1");
    newRow.classList.remove("tr-hidden");
    appBtn.classList.remove("tr-hidden");
}

function addConTd(){
    const tablTd1 = document.getElementById("myInput1").value;
    const tablTd2 = document.getElementById("myInput2").value;
    const tablTd3 = document.getElementById("myInput3").value;
    const tablTd4 = document.getElementById("myInput4").value;
    const tablTd5 = document.getElementById("myInput5").value;
    const tablTd6 = document.getElementById("myInput6").value;
  var table = document.getElementById("myTable");
  var row = table.insertRow(15);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
  cell1.innerHTML = tablTd1;
  cell2.innerHTML = tablTd2;
    cell3.innerHTML = tablTd3;
    cell4.innerHTML = tablTd4;
    cell5.innerHTML = tablTd5;
    cell6.innerHTML = tablTd6;
    
    const appBtn = document.getElementById("appId");
    const newRow = document.getElementById("newRow1");
    newRow.classList.add("tr-hidden");
    appBtn.classList.add("tr-hidden");
    
}

function ShowHideDiv(){
        var manualRwd = document.getElementById("manualRwd");
        var rowCheck = document.getElementById("rowCheck");
        rowCheck.style.display = manualRwd.checked ? "block" : "none";
   
}

function delFunc(){
    const manaulRes = document.querySelectorAll(".forManualSort");
    for (let i = 0; i < manaulRes.length; i++) {
   manaulRes[i].classList.remove("col-lg-3");
    manaulRes[i].classList.remove("col-md-4");
    manaulRes[i].classList.remove("col-6");
    manaulRes[i].classList.remove("col-4");
    manaulRes[i].classList.remove("col-3");
    
}
}
 function twoCard(){
     var cardTwo = document.getElementById("twoCard");
     if(cardTwo.checked){
         const manaulRes = document.querySelectorAll(".forManualSort");
         delFunc();
         for (let i = 0; i < manaulRes.length; i++){
             manaulRes[i].classList.add("col-6");
         }
         
     }
     
 }

function threeCard(){
    var cardThree = document.getElementById("threeCard");
     if(cardThree.checked){
         const manaulRes = document.querySelectorAll(".forManualSort");
         delFunc();
         for (let i = 0; i < manaulRes.length; i++){
             manaulRes[i].classList.add("col-4");
         }
         
         const cardBody = document.querySelectorAll(".card-body");
         for (let i = 0; i < cardBody.length; i++){
             cardBody[i].style.overflowX="hidden";
         }
         
     }
     
}

function fourCard(){
    var cardFour = document.getElementById("fourCard");
     if(cardFour.checked){
         const manaulRes = document.querySelectorAll(".forManualSort");
         delFunc();
         for (let i = 0; i < manaulRes.length; i++){
             manaulRes[i].classList.add("col-3");
         }
         const cardBody = document.querySelectorAll(".card-body");
         for (let i = 0; i < cardBody.length; i++){
             cardBody[i].style.overflowX="auto";
         }
     }
}

function autoCard(){
    ShowHideDiv();
    var cardAuto = document.getElementById("autoRwd");
     if(cardAuto.checked){
         const manaulRes = document.querySelectorAll(".forManualSort");
         delFunc();
         for (let i = 0; i < manaulRes.length; i++){
             manaulRes[i].classList.add("col-lg-3");
             manaulRes[i].classList.add("col-md-4");
             manaulRes[i].classList.add("col-6");
         }
         
     }
     
}

let input = document.getElementById("myInput");
let buttonAdd = document.getElementById("btnAdd");

input.addEventListener("change", notToAdd);

function notToAdd() {
    if (document.getElementById("myInput").value !== "") {
        buttonAdd.style.visibility="hidden"; 
    } else {
        buttonAdd.style.visibility="visible";
    }
}




/**********DARK MODE*****************/
function darkFunc(){
    
   const darkBody =document.getElementById("dark_body");
    darkBody.classList.toggle("dark_body");
    const darkNavbar = document.getElementsByClassName("navbar");
    darkNavbar[0].classList.toggle("dark_navbar");
    
    
    const navLink = document.querySelectorAll(".dark_link");
    
    for (var i=0 ; i < navLink.length ;i++){
        if(navLink[i].id !=="nv1"){
        navLink[i].id="nv1";    
        }else{
            navLink[i].id="";
        }
        
    };
    
    const darkTable= document.getElementsByClassName("table");
    darkTable[0].classList.toggle("table-dark");
    
    const darkBtn= document.getElementsByClassName("btn");
    for (let i=0; i < darkBtn.length; i++){
        darkBtn[i].classList.toggle("dark_button");
    };
    
    const darkOpt = document.getElementsByClassName("darkOptions");
     darkOpt[0].classList.toggle("text-light");
    
    const darkCards = document.getElementsByClassName("card");
    const darkLinkA = document.querySelectorAll("a.text-sm");
    for (let i=0; i < darkCards.length; i++){
        darkCards[i].classList.toggle("dark_card");
        darkLinkA[i].classList.toggle("dark_linka");
        
    }
    
    const darkContactUs = document.getElementsByClassName("dark_contact");
    darkContactUs[0].classList.toggle("text-light");
    
    const darkForm =document.getElementsByClassName("darkForm");
    darkForm[0].classList.toggle("forDarkForm");
    
    const darkMiniForm =document.getElementsByClassName("miniForm");
    darkMiniForm[0].classList.toggle("forMiniForm");
    darkMiniForm[1].classList.toggle("forMiniForm");
    
    const lastLink = document.getElementsByClassName("lastLink");
    lastLink[0].classList.toggle("forLastLink");
    lastLink[1].classList.toggle("forLastLink");
    
    const darkModeIcon = document.getElementById("darkModeIcon");
    darkModeIcon.classList.toggle("fordarkModeIcon");
    
}




