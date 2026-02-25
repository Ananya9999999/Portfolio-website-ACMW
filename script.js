const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields");
    } else {
        alert("Message sent successfully!");
        form.reset();
    }
});
const textArray = ["A Developer.", "A Problem Solver.", "A Future Engineer."];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            index = (index + 1) % textArray.length;
            typeEffect();
        }, 1200);
    }
}

typeEffect();