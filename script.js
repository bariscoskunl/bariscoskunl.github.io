// Daktilo Animasyonu
const phraseTR = "Merhaba, Ben Barış, Yazılım Geliştiricisiyim.";
const phraseEN = "Hi, I am Barış, I am a Software Developer.";

const textElementTR = document.getElementById("typing-text");
const textElementEN = document.getElementById("typing-text-en");

let i = 0;

function type(element, phrase) {
    if (element && i < phrase.length) {
        element.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(() => type(element, phrase), 80);
    }
}

window.onload = () => {
    if (textElementTR) type(textElementTR, phraseTR);
    if (textElementEN) type(textElementEN, phraseEN);

};

// Modal İşlemleri
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Scroll Takibi - Menü Aktifliği
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-links a');
const contentArea = document.querySelector('.content-area');

contentArea.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (contentArea.scrollTop >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});