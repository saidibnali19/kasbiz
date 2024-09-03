const menuToggler = document.querySelector("[data-menu-toggler]");
const menu = document.querySelector("[data-header-menu]");
menuToggler.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        menuToggler.setAttribute("aria-expanded", true);
    } else {
        menu.setAttribute("data-visible", false);
        menuToggler.setAttribute("aria-expanded", false);
    }
});

// To close the menu by clicking outside of it
document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !menuToggler.contains(e.target)) {
        console.log("You clicked outside the menu")
        menu.setAttribute("data-visible", false);
        menuToggler.setAttribute("aria-expanded", false);
    } else return
})

// For changing navigation styles based on scroll
const changingNav = document.querySelector("[data-primary-nav]");
const hero = document.querySelector("[data-hero]")

const fadeInOptions = {
    rootMargin: "-106px 0px 0px 0px",
    threshold: 0,
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            changingNav.classList.add("change")
        } else {
            changingNav.classList.remove("change")
        }
    });
}, fadeInOptions);

fadeInObserver.observe(hero);