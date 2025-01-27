const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll(".nav-item")
const projects = document.querySelectorAll(".card")

const isTouchscreen = window.matchMedia("(pointer: coarse)").matches

const observerOptions = {
  threshold: isTouchscreen ? 0.1 : 0.3, // Highlight when _% of the section is visible on the screen
  rootMargin: "-50px 0px 0px 0px" // Pre-empt entry into section to improve responsiveness
}

function observerCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Highlight the nav item of the section being viewed
      navItems.forEach(navItem => {
        const isViewingSection = navItem.getAttribute("href").substring(1) === entry.target.id
        navItem.classList.toggle("selected", isViewingSection)
      })
    }
  })
}

function initializeObserver() {
  const observer = new IntersectionObserver(observerCallback, observerOptions)
  // Observe sections to set what is being viewed
  sections.forEach(section => {
    observer.observe(section)
  })
}

// Remove project hover effect on touchscreen devices
function removeProjectHover() {
  if (isTouchscreen) {
    projects.forEach(project => {
      project.classList.remove("hover")
    })
  }
}

function initialize() {
  initializeObserver()
  removeProjectHover()
}

initialize()
