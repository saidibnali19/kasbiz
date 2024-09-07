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

const fadeInNavOptions = {
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
}, fadeInNavOptions);

fadeInObserver.observe(hero);

// Fade in animation for hero image
const fadeInImage = document.querySelector("[data-fade-in-image]");

const fadeInOptions = {
    rootMargin: "0px",
    threshold: 0,
};

const fadeInImageObserver = new IntersectionObserver((entries, fadeInImageObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        fadeInImageObserver.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInImageObserver.observe(fadeInImage);

// Fade in animation for hero top text
const fadeInTopText = document.querySelector("[data-fade-in-top-text]");

const fadeInTopTextObserver = new IntersectionObserver((entries, fadeInTopTextObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("top-text-appear");
        fadeInTopTextObserver.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInTopTextObserver.observe(fadeInTopText);

// Fade in animation for hero title
const fadeInTitle = document.querySelector("[data-fade-in-title]");

const fadeInTitleObserver = new IntersectionObserver((entries, fadeInTitleObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("title-appear");
        fadeInTitleObserver.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInTitleObserver.observe(fadeInTitle);

// Fade in animation for hero text
const fadeInText = document.querySelector("[data-fade-in-text]");

const fadeInTextObserver = new IntersectionObserver((entries, fadeInTextObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("text-appear");
        fadeInTextObserver.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInTextObserver.observe(fadeInText);

// Fade in animation for hero cta
const fadeInCta = document.querySelector("[data-fade-in-cta]");

const fadeInCtaObserver = new IntersectionObserver((entries, fadeInCtaObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("cta-appear");
        fadeInCtaObserver.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInCtaObserver.observe(fadeInCta);