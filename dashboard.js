const sidenav = document.getElementById("mySidenav");
const overlay = document.getElementById("overlay");

function openNav(event) {
  event.stopPropagation();
  sidenav.classList.add("open");
  overlay.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("open");
  overlay.classList.remove("active");
}