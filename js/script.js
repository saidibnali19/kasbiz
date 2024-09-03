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