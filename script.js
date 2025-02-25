document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navigation
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Smooth Scroll for internal navigation links
    document.querySelectorAll("nav ul li a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            
            // السماح بفتح الصفحات الأخرى مثل Registration.html
            if (href.includes(".html") || href.startsWith("http")) {
                return;
            }
            
            e.preventDefault();
            const targetSection = document.getElementById(href.substring(1));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.innerHTML = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Hero Text Animation
    const heroText = document.querySelector(".hero h1");
    heroText.classList.add("fade-in");

    // Service Section Hover Effect
    document.querySelectorAll(".service-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Active Navigation Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});