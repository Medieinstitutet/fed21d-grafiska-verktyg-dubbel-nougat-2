console.log("hej");

let aceptAllCookiesBtn = document.getElementById("aceptAllCookiesBtn");
let acceptnecessaryCookiesBtn = document.getElementById(
  "acceptnecessaryCookiesBtn"
);
let menuIcon = document.getElementById("menuIcon");
let menuWraper = document.getElementById("menuWraper");

let menuOpen = true;

aceptAllCookiesBtn.addEventListener("click", () => {
  document.getElementById("cookies").style.display = "none";
});

acceptnecessaryCookiesBtn.addEventListener("click", () => {
  document.getElementById("cookies").style.display = "none";
});

menuIcon.addEventListener("click", () => {
  console.log("click");
  if (menuOpen == false) {
    menuOpen = true;
    console.log("true");
    menuWraper.style.display = "none";
  } else {
    menuWraper.style.display = "flex";
    menuOpen = false;
    console.log("false");
  }
  console.log(menuOpen);
});
