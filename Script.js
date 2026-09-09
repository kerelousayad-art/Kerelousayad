
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

// تشغيل الفيديو التلقائي عند الوقوف عليه بالماوس
const workCards = document.querySelectorAll('.work-card');

workCards.forEach((card) => {
    const video = card.querySelector('video');
    if (!video) return;

    // تشغيل عند تمرير الماوس
    card.addEventListener('mouseenter', () => {
        video.muted = true; // تأكيد كتم الصوت عشان يشتغل بسلاسة
        video.play().catch(() => {});
    });

    // إيقاف عند خروج الماوس
    card.addEventListener('mouseleave', () => {
        video.pause();
    });

    // إيقاف باقي الفيديوهات لو اشتغل فيديو بالصوت
    video.addEventListener('play', () => {
        document.querySelectorAll('.work-card video').forEach((v) => {
            if (v !== video) v.pause();
        });
    });
});
// تأثير الـ 3D Tilt على كروت الخدمات
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});
