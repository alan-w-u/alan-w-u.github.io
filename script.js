// Constants
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const projects = document.querySelectorAll("#projects figure");

// Options for the IntersectionObserver
const options = {
  threshold: 0.15, // Threshold for amount of section visible (%) before section is highlighted in the navigation bar
};

// Highlight the section that is being viewed on the navigation bar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(navLink => {
        navLink.classList.remove("active");
        if (navLink.getAttribute("href").substring(1) == entry.target.id) {
          navLink.classList.add("active");
        }
      });
    }
  });
}, options);

// Observe to update what section is being viewed
sections.forEach(section => {
  observer.observe(section);
});

// Detect if using a touchscreen device
document.addEventListener("touchstart", () => {
  // Make project descriptions visible
  projects.forEach(project => {
    project.style.fontSize = "1rem";
  });

  // Make nav backgrounds transparent
  navLinks.forEach(navLink => {
    navLink.style.backgroundColor = "transparent";
  });
});
