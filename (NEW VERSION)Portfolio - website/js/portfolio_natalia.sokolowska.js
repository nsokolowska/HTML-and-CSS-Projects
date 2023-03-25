// FORM FUNCTIONS//

function openForm() {
    document.getElementById("Form").style.display = "block";
}

function closeForm() {
    document.getElementById("Form").style.display = "none";
}


function moblieMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }