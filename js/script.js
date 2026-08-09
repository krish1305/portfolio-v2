/* =====================================
   PORTFOLIO SCRIPT
===================================== */

// -------------------------------
// Mobile Menu
// -------------------------------

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// -------------------------------
// Dark Mode
// -------------------------------

const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// -------------------------------
// Scroll Progress Bar
// -------------------------------

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// -------------------------------
// Typing Effect
// -------------------------------

const typingElement = document.getElementById("typing");

const words = [

    "Full Stack Developer",

    "Frontend Developer",

    "Backend Developer",

    "MERN Stack Developer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// -------------------------------
// Back To Top Button
// -------------------------------

const backBtn = document.createElement("button");

backBtn.id = "backToTop";

backBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backBtn.classList.add("show");

    } else {

        backBtn.classList.remove("show");

    }

});

backBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// -------------------------------
// Reveal Animation
// -------------------------------

const revealElements = document.querySelectorAll(

    "section,.project-card,.skill-card"

);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            el.classList.add("show");

            el.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// -------------------------------
// Active Navigation
// -------------------------------

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// -------------------------------
// Contact Form Validation
// -------------------------------

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();

        const email = form.querySelector("input[type='email']").value.trim();

        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {

            alert("Please fill all fields.");

            return;

        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            alert("Please enter a valid email.");

            return;

        }

        alert("Message sent successfully!");

        form.reset();

    });

}

console.log("🚀 Portfolio Loaded Successfully");