// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
  });
}

//FADE ANIMATIONS
const appearOnScroll = new IntersectionObserver(function(entries, obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
});


// Fade-in on scroll
const faders = 
  document.querySelectorAll(".fade").forEach(f =>
  appearOnScroll.observe(f));
 

//LOADER
window.addEventListener("load", () => {
     const loader =
document.querySelector(".loader");

loader.classList.add("hide-loader");
 
    setTimeout(() => {
loader.classList.add("fade-out");
    }, 1000);
  });