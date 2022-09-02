// nav toggle button
const navToggle = document.getElementById("nav-toggle");

// Nav list 
const navlist = document.getElementById("nav-list");

// Nav items
const navItems = document.getElementsByClassName("nav-item");

// developer title
const devTitle = document.getElementById("devTitle")

const onNavToggle = () => {

  navlist.classList.toggle("active");
  navToggle.classList.toggle("active");

  // all elements are visible now
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("active");
  }

};

// open and close navigation button and navigation
navToggle.addEventListener("click", () => {
  onNavToggle();
});

const devTitles = [
  "Full stack Android Devloper",
  "Tech enthusiast",
  "Full stack Web Devloper",
  "Coding Enthusiast"
]

// devloper Title Text changes 
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const typer = (el) => {
  const texts = JSON.parse(el.dataset.rotate);
  const period = +el.dataset.period || 1000;
  const speed = +el.dataset.speed || 200;
  const textsTot = texts.length;

  let tx = 0;
  let ch = 0;
  let chTot = 0;
  let text = ""

  const typeIt = () => {
    if (ch > chTot) return setTimeout(typeText, period);
    el.textContent = text.substring(0, ch++);
    setTimeout(typeIt, rand(Math.min(60, speed - 80), speed + 80));
  };


  const typeText = () => {
    ch = 0;
    text = texts[tx];
    chTot = text.length;

    typeIt();

    tx += 1;
    tx %= texts.length;
  };

  typeText();

};

document.querySelectorAll("[data-rotate]").forEach(typer);

