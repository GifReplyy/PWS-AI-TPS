document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".scroll-text");

    function onScroll() {
        textElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.80) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    // Initial check when the page loads
    onScroll();

    // Attach the event listener to scroll event
    window.addEventListener("scroll", onScroll);
});



