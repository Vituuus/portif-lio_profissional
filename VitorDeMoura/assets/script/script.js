const d = new Date();
document.getElementById("idadeAtual").innerHTML = d.getFullYear() - 1999;

function menuMobile() {
     let x = document.getElementById("linkNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
    
}