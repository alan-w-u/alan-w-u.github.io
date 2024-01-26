// Constants
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Options for the IntersectionObserver
const options = {
    threshold: 0.5, // Threshold for amount of section visible (%) before section is highlighted in the navigation bar
};

// Highlight the section that is being viewed on the navigation bar
const observer = new IntersectionObserver(function (entries) {
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
