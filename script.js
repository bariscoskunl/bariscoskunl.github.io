const phraseTR = "Merhaba, Ben Barış, Yazılım Geliştiricisiyim.";
const phraseEN = "Hi, I am Barış, I am a Software Developer.";

const textElementTR = document.getElementById("typing-text");
const textElementEN = document.getElementById("typing-text-en");

function type(element, phrase, index = 0) {
    if (!element) return;

    if (index < phrase.length) {
        element.innerHTML += phrase.charAt(index);
        setTimeout(() => {
            type(element, phrase, index + 1);
        }, 70);
    }
}

window.addEventListener("load", () => {
    if (textElementTR) type(textElementTR, phraseTR);
    if (textElementEN) type(textElementEN, phraseEN);
});

// Modal İşlemleri
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Arka planın kaymasını engeller
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Scroll Takibi - Menü Aktifliği
const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-links a");
const contentArea = document.querySelector(".content-area");

if (contentArea) {
    contentArea.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Ekranda hangi bölümün ağırlıklı olduğunu hesaplar
            if (contentArea.scrollTop >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
}