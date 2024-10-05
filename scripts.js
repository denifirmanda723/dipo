// Fade-in animation for images when they load
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.opacity = 0; // Set initial opacity to 0
        img.onload = () => {
            img.style.transition = "opacity 1s ease"; // Transition for fade-in
            img.style.opacity = 1; // Set opacity to 1 on load
        };
    });
});

// Scroll Animation
const sections = document.querySelectorAll("section");

const options = {
    root: null, // use the viewport as the root
    threshold: 0.1, // trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add class when section is visible
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
