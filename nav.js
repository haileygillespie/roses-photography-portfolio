var open = false;
var nav;

function openNav() {
  nav = document.getElementById('pages').style;
  if (open == false) {
    nav.display = "flex";
    nav.height = "40vh";
    nav.backgroundColor = "white";
    nav.marginTop = "0px";
    open = true;
  } else {
    nav.display = "none";
    nav.height = "45px";
    nav.backgroundColor = "white";
    nav.marginTop = "0px";
    open = false;
  }
}
