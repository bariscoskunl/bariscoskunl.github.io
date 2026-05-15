const textElementTR = document.getElementById("typing-text");
const textElementEN = document.getElementById("typing-text-en");

const phraseTR = "Merhaba, Ben Barış, Yazılım Geliştiricisiyim.";
const phraseEN = "Hi, I am Barış, I am a Software Developer.";

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

function showSection(id) {
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(event && event.currentTarget) event.currentTarget.classList.add('active');
}