// Constants
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const projects = document.querySelectorAll("#projects figure");

// Options for the IntersectionObserver
const observerOptions = {
  threshold: 0.15, // Threshold for amount of section visible (%) before section is highlighted in the navigation bar
  rootMargin: "-50px 0px 0px 0px" // Pre-empt entry into section to improve responsiveness
};

// Highlight the section that is being viewed on the navigation bar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(navLink => {
        navLink.classList.remove("selected");
        if (navLink.getAttribute("href").substring(1) === entry.target.id) {
          navLink.classList.add("selected");
        }
      });
    }
  });
}, observerOptions);

// Observe to update what section is being viewed
sections.forEach(section => {
  observer.observe(section);
});
