
// ==============================
// Reveal animations
// ==============================

const revealElements = document.querySelectorAll(
    ".section, .work-card, .service-card, .testimonial"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==============================
// Magnetic buttons
// ==============================

const magneticButtons = document.querySelectorAll(
    ".primary-button, .nav-button, .contact-button"
);

magneticButtons.forEach((button) => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


// ==============================
// Smooth anchor scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (e) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});
