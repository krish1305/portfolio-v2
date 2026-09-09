/* =========================================
   KRISH PORTFOLIO
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuBtn.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    document.querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

}


/* =========================================
   THEME TOGGLE
========================================= */

const themeBtn =
    document.getElementById("theme-btn");

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        themeBtn.innerHTML = isLight
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';

    });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex
            );

        charIndex++;


        if (charIndex >
            currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex
            );

        charIndex--;


        if (charIndex < 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

            charIndex = 0;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 55 : 100
    );

}

typeEffect();


/* =========================================
   SCROLL PROGRESS
========================================= */

const progressBar =
    document.getElementById("progressBar");


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement
                .scrollHeight;

        const windowHeight =
            window.innerHeight;

        const scrollable =
            documentHeight -
            windowHeight;

        const progress =
            scrollable > 0
                ? (scrollTop / scrollable) * 100
                : 0;

        if (progressBar) {

            progressBar.style.width =
                `${progress}%`;

        }

    }
);


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .contact-card, .stat"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navLinks
        ) {

            navLinks.classList.remove(
                "active"
            );

            if (menuBtn) {

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        }

    }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%cKrish Kumar Portfolio 🚀",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "Built with HTML, CSS & JavaScript."
);