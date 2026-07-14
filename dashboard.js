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



function showPage(pageId, headerText, clickedLink) {
  // hide all sections, show the target one
  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.add("d-none");
  });
  document.getElementById("page-" + pageId).classList.remove("d-none");

  // update header text
  document.getElementById("pageHeader").textContent = headerText;

  // update sidebar active state
  document.querySelectorAll(".sidebar-content a").forEach(link => {
    link.classList.remove("active");
  });
  clickedLink.classList.add("active");

  // show tab bar only for home/portfolio, and sync its active state
  const tabBar = document.getElementById("homeTabs");
  if (pageId === "home" || pageId === "portfolio") {
    tabBar.classList.remove("d-none");
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.textContent.trim().toLowerCase() === pageId);
    });
  } else {
    tabBar.classList.add("d-none");
  }

  // close mobile sidebar after navigating
  if (typeof closeNav === "function") closeNav();
}

function switchTab(pageId, clickedBtn) {
  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.add("d-none");
  });
  document.getElementById("page-" + pageId).classList.remove("d-none");

  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  clickedBtn.classList.add("active");

  // keep sidebar's Home/Invest link in sync if switching tabs directly
  document.querySelectorAll(".sidebar-content a").forEach(link => link.classList.remove("active"));
  const matchingLink = [...document.querySelectorAll(".sidebar-content a")]
    .find(a => a.getAttribute("onclick")?.includes(`'${pageId}'`));
  matchingLink?.classList.add("active");
}

function scrollCarousel(trackId, direction) {
  const track = document.getElementById(trackId);
  const firstItem = track.firstElementChild;
  const itemWidth = firstItem.offsetWidth + 12; // +gap
  track.scrollBy({ left: direction === "left" ? -itemWidth : itemWidth, behavior: "smooth" });
}

window.onload = function() {
  const saved = localStorage.getItem("walletBalance");
  if (saved) {
    const [whole, decimal] = parseFloat(saved).toFixed(2).split(".");
    document.getElementById("balanceAmount").textContent = Number(whole).toLocaleString();
    document.getElementById("balanceDecimal").textContent = "." + decimal;
  }

  const firstName = localStorage.getItem("firstName") || "";

  // random greeting
  const greetings = ["Hey there", "Hi there", "Hello there", "Welcome back", "Good to see you", "Howdy"];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  document.getElementById("greetingWord").textContent = randomGreeting;
  document.getElementById("greetingName").textContent = firstName;
};

function copyText(event, text){
  navigator.clipboard.writeText(text);
  const btn = event.currentTarget;
  const original = btn.innerHTML;
  // btn.innerHTML = '<i class="bi bi-check2"></i>'; 
  alert('Successfully Copied')
}