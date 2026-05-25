// Navbar blur effect on scroll

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(11, 13, 16, 0.92)";
  } else {
    navbar.style.background = "rgba(11, 13, 16, 0.7)";
  }

});


// Fade in animation

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.1
});


const hiddenElements = document.querySelectorAll(".card");

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
